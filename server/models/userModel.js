const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({ 
     name:String,
     brand:String,
     price: String,
     defaultImage:String,
     images:[String]
})

module.exports = mongoose.model("user", userSchema);