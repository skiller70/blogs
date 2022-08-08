import React from "react";
import Navbar from "./Navbar/Navbar"
import { useDispatch } from "react-redux";
import {Routes,Route} from "react-router-dom"
import Blogs from "./Blogs";
import Register from "./register/Register";
import Home from "./Home";
import Login from "./Login/Login"
import About from "./About";
import NavToggle from "./Navbar/NavToggle"
import PrivetLogin from "./ProtectedRoute/PrivetLogin"
function Main(props) {
  const dispatch = useDispatch();



  return (
    <div>
    <div className=" w-full ">
    <Navbar/>
    </div>

      <Routes>

<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/blogs" element={<Blogs/>}/>
<Route path="/register" element={<Register/>}/>



<Route path="/navtoggle" element={<NavToggle/>}/>

<Route path="/" element={<PrivetLogin/>}>
<Route path="/login" element={<Login/>}/>
</Route>
</Routes>

     
    </div>
  );
}

export default Main;
