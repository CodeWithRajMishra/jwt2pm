import { useState } from "react";
import axios from "axios";

const Insert=()=>{
 const [rollno, setRollno] = useState("");
 const [name, setName] = useState("");
 const [city, setCity] = useState("");
 const [image, setImage] = useState("");


  const handleImage=(e)=>{
         let value=e.target.files[0];
         setImage(value);
         console.log(image);
  }

 const handleSubmit=async()=>{
  let api="http://localhost:8000/user/datasave";

   const formData = new FormData();
         formData.append("rollno", rollno);
         formData.append("name", name);
         formData.append("city", city);
         formData.append("image", image);
  
      const response= await axios.post(api, formData);
      console.log(response.data);
 }


  return(
    <>
      <h1> Insert Student Records</h1>
      Enter Rollno : <input type="text" name="rollno" value={rollno} onChange={(e)=>{setRollno(e.target.value)}} />
      <br />
      Enter name : <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <br />
      Enter city : <input type="text" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}} />
      <br />
      Upload image : <input type="file" name="image" onChange={handleImage}    />
      <br />
      <button onClick={handleSubmit}> save!!!</button>
    </>
  )
}

export default Insert;