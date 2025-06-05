const Appointment = require("../models/appointment.model");

// Helper: Round date to nearest 30 mins slot
function roundToSlot(date) {
    const ms = 1000 * 60 * 30;
    return new Date(Math.floor(date.getTime() / ms) * ms);
}

const bookAppointment = async (req, res) => {
    try {
        const { name, email, contact, datetime } = req.body;
        if (!name || !email || !contact || !datetime)
            return res.status(400).json({ message: "All fields required" });

        const desiredDate = roundToSlot(new Date(datetime));

        // Check if slot is already booked
        const existing = await Appointment.findOne({ datetime: desiredDate });
        if (existing)
            return res.status(409).json({ message: "Slot already booked" });

        // Create appointment
        const appointment = new Appointment({
            name,
            email,
            contact,
            datetime: desiredDate,
        });
        await appointment.save();

        res.status(201).json({ message: "Appointment booked", appointment });
    } catch (error) {
        console.error("Error booking appointment:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const getBookedSlots = async (req, res) => {
    try {
        const { date } = req.query;
        if (!date) return res.status(400).json({ message: "Date is required" });

        const start = new Date(date);
        start.setHours(0, 0, 0, 0);
        const end = new Date(start);
        end.setDate(end.getDate() + 1);

        const appointments = await Appointment.find({
            datetime: { $gte: start, $lt: end },
        }).sort({ datetime: 1 });

        res.json({
            date,
            bookedSlots: appointments.map((a) => a.datetime),
        });
    } catch (error) {
        console.error("Error fetching slots:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    bookAppointment,
    getBookedSlots,
};