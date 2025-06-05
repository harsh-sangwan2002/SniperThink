const appointmentRouter = require("express").Router();
const { bookAppointment, getBookedSlots } = require("../controllers/appointment.controller");

appointmentRouter.post("/", bookAppointment)
    .get("/slots", getBookedSlots);

module.exports = appointmentRouter;
