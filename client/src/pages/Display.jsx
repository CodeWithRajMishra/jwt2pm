import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Display=()=>{
  const [mydata, setMydata] = useState([]);
  const navigate= useNavigate();

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
        <td> {key.name} </td>
        <td> {key.email} </td>
        <td> 
           { 
              key.bookid.map((key1)=>{
                  return(
                    <>
                      <p>{key1.bookname}, {key1.price}</p>
                    </>
                  )
              })
           }
          
          
           </td>
           <td>
            <button onClick={()=>{navigate(`/addnewbook/${key._id}`)}}> Add New Book</button>
           </td>
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
          <th> Auther Name </th>
          <th> Email </th>
          <th>Book Detail Name/Price </th>
          <th> </th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Display;