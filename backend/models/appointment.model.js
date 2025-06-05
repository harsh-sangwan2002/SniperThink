const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    datetime: { type: Date, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const appointmentModel = mongoose.model("appointments", appointmentSchema);
module.exports = appointmentModel;