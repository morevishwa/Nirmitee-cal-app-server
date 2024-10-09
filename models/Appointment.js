// models/Appointment.js
const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  doctorId: String,
  title: String,
  start: Date,
  end: Date,
  patientName: String,
  color: String
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;
