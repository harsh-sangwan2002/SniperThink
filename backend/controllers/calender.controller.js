const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// const nodemailer = require("nodemailer");

const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// Scopes for calendar read/write
const SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
];

// Step 1: Generate Google Auth URL
const getAuthURL = (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
        prompt: "consent",
    });
    res.json({ url });
};

// Step 2: OAuth2 callback to get tokens
const oauth2callback = async (req, res) => {
    const { code } = req.query;
    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        req.session.tokens = tokens;
        res.send("Google Calendar connected! You can now fetch slots and schedule meetings.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Authentication failed");
    }
};

// Helper: get calendar client with stored tokens
const getCalendarClient = (tokens) => {
    const client = new google.calendar({ version: "v3", auth: oauth2Client });
    oauth2Client.setCredentials(tokens);
    return client;
}

// Step 3: Fetch free 30-minute slots on a given date
const getFreeSlots = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const tokens = req.session.tokens;
        if (!tokens) return res.status(401).json({ message: "Not authenticated" });

        if (!startDate || !endDate)
            return res.status(400).json({ message: "startDate and endDate are required" });

        const calendar = getCalendarClient(tokens);


        const start = new Date(startDate);
        const end = new Date(endDate);

        if (start > end)
            return res.status(400).json({ message: "startDate must be before or equal to endDate" });


        const allFreeSlots = {};

        for (
            let d = new Date(start);
            d <= end;
            d.setDate(d.getDate() + 1)
        ) {
            const dayStart = new Date(d);
            dayStart.setHours(9, 0, 0, 0);
            const dayEnd = new Date(d);
            dayEnd.setHours(17, 0, 0, 0);

            const busyTimes = await calendar.freebusy.query({
                requestBody: {
                    timeMin: dayStart.toISOString(),
                    timeMax: dayEnd.toISOString(),
                    timeZone: "UTC",
                    items: [{ id: "primary" }],
                },
            });

            const busy = busyTimes.data.calendars.primary.busy || [];


            let slots = [];
            let current = new Date(dayStart);
            while (current < dayEnd) {
                slots.push(new Date(current));
                current = new Date(current.getTime() + 30 * 60000);
            }

            const freeSlots = slots.filter((slot) => {
                const slotEnd = new Date(slot.getTime() + 30 * 60000);
                return !busy.some((b) => {
                    const busyStart = new Date(b.start);
                    const busyEnd = new Date(b.end);
                    // Overlap if slot start < busy end && slot end > busy start
                    return slot < busyEnd && slotEnd > busyStart;
                });
            });

            allFreeSlots[d.toISOString().split("T")[0]] = freeSlots.map(slot =>
                slot.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: false })
            );
        }

        res.json({ freeSlots: allFreeSlots });
    } catch (error) {
        console.error("Free slots error:", error);
        res.status(500).json({ message: "Failed to get free slots" });
    }
};


// Step 4: Schedule meeting event on calendar
const scheduleMeeting = async (req, res) => {
    try {
        const { name, email, contact, description, dateTime, token } = req.body;

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: token });

        const calendar = google.calendar({ version: "v3", auth: oauth2Client });

        const start = new Date(dateTime);
        const end = new Date(start);
        end.setMinutes(end.getMinutes() + 30);

        const event = {
            summary: `Appointment with ${name}`,
            description: `${description}\nContact: ${contact}`,
            start: { dateTime: start.toISOString(), timeZone: "UTC" },
            end: { dateTime: end.toISOString(), timeZone: "UTC" },
            attendees: [{ email }],
            reminders: { useDefault: true },
        };

        const createdEvent = await calendar.events.insert({
            calendarId: "primary",
            resource: event,
            sendUpdates: "all",
        });

        res.status(200).json({ message: "Event created", eventId: createdEvent.data.id });
    } catch (err) {
        console.error("Error creating calendar event:", err);
        res.status(500).json({ message: "Failed to schedule meeting" });
    }
};


module.exports = {
    getAuthURL,
    oauth2callback,
    getFreeSlots,
    scheduleMeeting,
};