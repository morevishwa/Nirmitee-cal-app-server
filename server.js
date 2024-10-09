// server.js
const express = require("express");
const mongoose = require("mongoose");
const Appointment = require("./models/Appointment");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const MONGO_URL = `mongodb+srv://VISHWA:VISWA@mycluster.sdujrrv.mongodb.net/appointmentDB?retryWrites=true&w=majority&appName=myCluster`;


// API Endpoints

// Get all appointments
app.get("/appointments", async (req, res) => {
  const appointments = await Appointment.find({});
  res.json(appointments);
});

// Add a new appointment
app.post("/appointments", async (req, res) => {
  

  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
});

// Update an appointment
app.put("/appointments/:id", async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(appointment);
});

// Delete an appointment
app.delete("/appointments/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

const port = 5000;
app.listen(port, async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("successfully connected to Database"))
    .catch((err) => console.log("error", err));

  console.log(`Server running on port ${port}`);
});
