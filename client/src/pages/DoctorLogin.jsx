import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BASE_URL from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorLogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

   const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BASE_URL}/doctor/doctorlogin`;

    try {
          const response = await axios.post(api, {email:email, password:password});
          console.log(response.data); 
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("docid", response.data._id);
          
          toast.success("You are Succesfully login!");
          navigate("/doctordashboard");
 
    } catch (error) {
        toast.error(error.response.data.msg);
        
    }

   }


    return(
        <>
          <h1> Doctor Login</h1>
          <div id="doclogin">
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>

    <ToastContainer />
        </>
    )
}

export default DoctorLogin;