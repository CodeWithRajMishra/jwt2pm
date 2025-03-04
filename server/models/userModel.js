const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({ 
     rollno:Number,
     name:String,
     city: String,
     image:String
})

module.exports = mongoose.model("user", userSchema);