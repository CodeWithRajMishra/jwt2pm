import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashBoard from "./DoctorDashBoard";
import SearchDoctor from "./pages/SearchDoctor";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="doctorlogin" element={<DoctorLogin/>}/>
          <Route path="searchdoctor" element={<SearchDoctor/>} />
        </Route>
      </Routes>
      <Routes>
         <Route path="doctordashboard" element={<DoctorDashBoard/>}>
         
         </Route>
      </Routes>


    </BrowserRouter>

    </>
  )
}

export default App;