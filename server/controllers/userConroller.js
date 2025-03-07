const AutherModel= require("../models/autherModel");
const BookModel= require("../models/bookModel");

const userSave=async(req, res)=>{
  const {name, email, bookname, price} = req.body;

  const Author= await AutherModel.create({
    name:name,
    email:email,
  })

  const Book= await BookModel.create({
    bookname:bookname,
    price:price,
    autherid:Author._id
  })

  await AutherModel.findByIdAndUpdate(Author._id,  {$push:{bookid:Book._id}})
 
  res.send("OKK")
  

}


const dataDisplay=async(req, res)=>{
    const Auther = await AutherModel.find().populate("bookid");
    res.send(Auther);
}

const addNewBook=async(req, res)=>{
  const { bookname, price, aid} = req.body ;
  const Book = await BookModel.create({
    bookname:bookname,
    price:price,
    autherid:aid
  })

  await AutherModel.findByIdAndUpdate(aid, {$push:{ bookid:Book._id}})
  res.send("new book succesflyy added!!!");
}


const bookdataDisplay=async(req, res)=>{
  const Book = await BookModel.find().populate("autherid");
  res.send(Book);
}


module.exports ={
  userSave,
  dataDisplay,
  addNewBook,
  bookdataDisplay
}