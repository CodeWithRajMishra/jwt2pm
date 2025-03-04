import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
  const [mydata, setMydata] = useState([]);


  const loadData=async()=>{
    let api="http://localhost:8000/user/datadisplay";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  }, [])

 const ans=mydata.map((key)=>{
  return(
    <>
      <tr>
        <td> 
          <img src={`http://localhost:8000/uploads/${key.image}`} width="100" height="100" />
          {key.image} </td>
        <td> {key.rollno} </td>
        <td> {key.name} </td>
        <td> {key.city} </td>
      </tr>
    </>
  )
 })

  return(
    <>
      <h1> Display Data</h1>
      <hr />
      <table>
        <tr>
          <th> </th>
          <th> Rollno</th>
          <th> Name</th>
          <th> City</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Display;