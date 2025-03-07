import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import ShowProduct from "./pages/ShowProduct";
import AddNewBook from "./pages/AddNewBook";
import BookDetail from "./pages/BookDetail";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="insert" element={<Insert/>}/> 
          <Route path="display" element={<Display/>}/>
          <Route path="showproduct/:id" element={<ShowProduct/>}/> 
          <Route path="addnewbook/:id" element={<AddNewBook/>}/> 
          <Route path="bookdetail" element={<BookDetail/>} />
        </Route>
        </Routes>


    </BrowserRouter>
    </>
  )
}
export default App;