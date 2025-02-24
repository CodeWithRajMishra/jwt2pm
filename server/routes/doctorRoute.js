const express = require("express");
const route = express.Router();
const doctorController = require("../controllers/doctorConroller");

route.post("/registration", doctorController.doctorRegistration);
route.get("/homedoctorsdisplay", doctorController.doctorHomeDisplay);


module.exports = route;
