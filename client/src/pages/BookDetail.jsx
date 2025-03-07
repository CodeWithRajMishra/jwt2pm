import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BookDetail=()=>{
  const [mydata, setMydata] = useState([]);
  const navigate= useNavigate();

  const loadData=async()=>{
    let api="http://localhost:8000/user/bookdatadisplay";
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
        <td> {key.bookname} </td>
        <td> {key.price} </td>
        <td>  {key.autherid.name}  </td>
        <td>  {key.autherid.email}  </td>
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
          <th> Book name </th>
          <th>Price </th>
          <th>Auther Name </th>
          <th> Email </th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default BookDetail;