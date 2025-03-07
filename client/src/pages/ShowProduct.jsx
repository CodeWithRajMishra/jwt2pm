import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ShowProduct=()=>{
    const {id} = useParams();
    const [prodata, setProdata]= useState({});
    const [myimages, setMyimages]= useState([]);
    const [showImage, setShowImage]= useState("");

    const loadData=async()=>{
        let api="http://localhost:8000/user/showproduct";
        const response = await axios.post(api, {id:id});
        setProdata(response.data);
        console.log(response.data.images);
        setMyimages(response.data.images);
        setShowImage(response.data.defaultImage);
      }

      useEffect(()=>{
        loadData();
      }, [])

      const ans=myimages.map(key=>{
        return(
            <>
          <a href="#"  onMouseMove={()=>{setShowImage(key)}}>
             <img src={`http://localhost:8000/${key}`} 
           width="50" height="50" />
           </a>
           <br /> <br />
            </>
        )
    })

    return(
        <>
           <h1> Show PRoducts Dertail: {id}</h1>  
           <div style={{display:"flex"}}>
             <div style={{width:"10%"}}>          
               {ans}
             </div>
             <div style={{width:"90%"}}>      
             <img src={`http://localhost:8000/${showImage}`} 
           width="300" height="300" />
             </div>
            </div>      
        </>
    )
}

export default ShowProduct;