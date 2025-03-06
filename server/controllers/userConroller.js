const UserModel= require("../models/userModel");
const userSave=async(req, res)=>{
  const imageUrls = req.files.map(file => file.path);
  const {name, brand, price} = req.body;
  const defaultImage= imageUrls[0];
   const Product= await UserModel.create({
    name:name,
    brand:brand,
    price: price,
    defaultImage:defaultImage,
    images:imageUrls
   })
   res.send("Product Save!!!");
}

const userDisplay=async(req, res)=>{
    const User = await UserModel.find();
    res.send(User);
}
const productDisplay=async(req, res)=>{
 const {id}= req.body;
  const Product= await UserModel.findById(id);
  res.send(Product);
}


module.exports ={
  userSave,
  userDisplay,
  productDisplay   
}