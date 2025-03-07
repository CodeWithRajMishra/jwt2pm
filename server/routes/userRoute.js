
const express = require("express");
const route = express.Router();
const UserController= require("../controllers/userConroller");

route.post("/datasave", UserController.userSave);
route.get("/datadisplay", UserController.dataDisplay);
route.post("/addnewbook", UserController.addNewBook);
route.get("/bookdatadisplay", UserController.bookdataDisplay);



module.exports = route;



