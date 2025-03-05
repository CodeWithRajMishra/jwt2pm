import { useState } from "react";
import axios from "axios";
const Insert=()=>{
 const [input, setInput] = useState({});
 const [images, setImages]=useState([]);


 const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
 }

const handleFileChange=(e)=>{
  setImages(e.target.files);
  console.log(images);
}
 // input ={name:"cpu", brand:"sony", price:3456}
 const handleSubmit=async()=>{
  let api="http://localhost:8000/user/datasave";
  const formData= new FormData(); 
  for (let key in input)
   {
      formData.append(key, input[key])
   }

 for (let i = 0; i < images.length; i++) 
  {
  formData.append('images', images[i]);
 }

 const response=await axios.post(api, formData);
 console.log(response.data);  


}
return(
    <>
      <h1> Insert Student Records</h1>
      Enter Product name : <input type="text" name="name"
      onChange={handleInput} />
      <br />
      Enter brand : <input type="text" name="brand"  
        onChange={handleInput}  />
      <br />
      Enter price : <input type="text" name="price" 
      onChange={handleInput} />
      <br />
      Upload images : <input type="file" multiple  onChange={handleFileChange}  />
      <br />
      <button onClick={handleSubmit}> save!!!</button>
    </>
  )
}

export default Insert;