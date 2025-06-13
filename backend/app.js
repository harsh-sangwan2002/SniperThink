const express = require('express');
const cors = require('cors');
const session = require("express-session");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(
    session({
        secret: "hsangwan2002",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    origin: "http://localhost:5174",
    origin: "https://sniper-think.vercel.app/",
    credentials: true
}));

const connectToDB = require('./utils/db');
const appointmentRouter = require('./routes/appointment.route');
const calendarRoutes = require("./routes/calender.route");
const authRouter = require("./routes/auth.route");

app.use('/api', authRouter);
app.use('/api/appointments', appointmentRouter);
app.use("/api/calendar", calendarRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDB();
});