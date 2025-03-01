import {Link, Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
           <Link to="home">Home</Link> |
           <Link to="login">Login</Link> |
           <Link to="registration"> Registration</Link>
           <hr />
              <Outlet/>
        
           <hr />
           www.mycompany.com all right rserved. 2025 &copy;
        </>
    )
}

export default Layout;