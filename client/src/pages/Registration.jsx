import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration=()=>{
 const [input, setInput] = useState({});
 const navigate = useNavigate();
 const handleInput=(e)=>{
   let name= e.target.name ;
   let value= e.target.value;
   setInput(values=>({...values, [name]:value}));
   console.log(input);
 }

 const handleSubmit=async()=>{
    let api="http://localhost:8000/user/registration";
    const response = await axios.post(api, input);
    console.log(response.data);
    navigate("/login");
 }

  return(
      <>
        <h1> Registration </h1>      
         Enter User Name: <input type="text" name="name" onChange={handleInput}  />
         <br />
         Enter  Email : <input type="email" name="email" onChange={handleInput}  />
         <br />
         Enter Password : <input type="password" name="password" onChange={handleInput} />
         <br />
         <button onClick={handleSubmit} > Registered!</button>
      </>
    )
  }
  export default Registration;