
const express = require("express");
const multer = require("multer");
const route = express.Router();
const UserController= require("../controllers/userConroller");

const storage=  multer.diskStorage({
       destination: (req, file, cb)=>{
        cb(null, 'uploads/'); // Save files to uploads directory
       },      
       filename:(req, file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname); // Keep original file name
       }  
})

const upload = multer({ storage: storage });




route.post("/datasave", upload.single('image'), UserController.userSave);
route.get("/datadisplay" , UserController.userDisplay)

module.exports = route;



