import { useState } from "react";
import axios from "axios";
const Insert=()=>{
 const [input, setInput] = useState({});
 const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
 }

 const handleSubmit=async()=>{
  let api="http://localhost:8000/user/datasave";
 const response=await axios.post(api,input);
 console.log(response.data);  
}
return(
    <>
      <h1> Insert Student Records</h1>
      Enter Author name : <input type="text" name="name"
      onChange={handleInput} />
      <br />
      Enter Email : <input type="email" name="email"  
        onChange={handleInput}  />
      <br />
      Enter Book name : <input type="text" name="bookname" 
      onChange={handleInput} />
      <br />
      Enter Price : <input type="text" name="price" 
      onChange={handleInput} />
      <br />
      <button onClick={handleSubmit}> save!!!</button>
    </>
  )
}

export default Insert;