import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const AddNewBook= ()=>{
    const {id} = useParams();
    const [bookname, setBookname] = useState("");
    const [price, setPrice] = useState("");

   
    const handleSubmit=async()=>{
     let api="http://localhost:8000/user/addnewbook";
    const response=await axios.post(api,{bookname:bookname, price:price, aid:id});
    console.log(response.data);  
   }



    return(
        <>
         <h1> Add More Book: </h1>
         Enter Bookname : <input type="text" name="bookname" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} />
         <br />
         Enter Price : <input type="text" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
         <br />
         <button onClick={handleSubmit}> Save!!!</button>
        </>
    )
}
export default AddNewBook;