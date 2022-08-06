import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./Logout";
import { Suspense } from "react";
import { faS, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavToggle from "./NavToggle";
import Home from "./Home";
import Blogs from "./Blogs";
import Register from "./register/Register";
import About from "./About";
import { useNavigate } from "react-router-dom";

import Login from "./Login/Login";
function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(()=>{

  // },[match])
  //CHECKING USERNAME IN REDUX
  const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username;
  });
  const navToggle = useSelector((state) => {
    return state.custom.navToggle;
  });

  const authUser = useSelector((state) => state.register.AUTH_USER);

  //IF USER EXIST INSIDE THE REDUX THEN SHOW LOGOUT ELSE LOGIN


  const hamburger = navToggle ? (
    <FontAwesomeIcon
      className="    w-8 h-7   border-2  border-gray-700 rounded text-gray-600 font-semibold "
      icon={faXmark}
    />
  ) : (
    <FontAwesomeIcon
      className="    w-8 h-7   text-gray-600 font-semibold "
      icon={faBars}
    />
  );

  return (
    <>
      <nav className=" bg-[#e2e8f0]">
        <div className=" h-15 max-w-xl md:max-w-4xl mx-auto py-2 ">
          <div className=" flex    justify-between   ">
            {/* 
      NAVBRAND AND A TAG */}
            <div className=" flex   space-x-[195px] ">
              <div className="flex item-center  px-2 h-14 w-20 ">
                <img src={require("./Zeronet_logo.png")} alt="" />
              </div>
              {/* LINK ITEM */}
              <div className=" hidden md:flex  items-center space-x-5">
                <Link to="/home" className="   text-gray-600 font-semibold    ">
                  Home
                </Link>

                <Link to="/about" className="text-gray-600 font-semibold">
                  About
                </Link>

                <Link to="/blogs" className="text-gray-600 font-semibold">
                  Blogs
                </Link>

                <button
                  onClick={() => {
                    dispatch({ type: "checkRoute", payload: navigate });
                  }}
                >
                  {" "}
                  click me
                </button>
              </div>
            </div>

            {/* LOGIN SIGN UP */}

            <div className=" mx-5 flex gap-8">
              <div className="  hidden md:flex items-center ">
                <Link to="login">Login</Link>
              </div>

              <div className="  flex md:hidden  self-center">
                <button
                  className="hover:text-blue-300"
                  onClick={() => {
                    dispatch({ type: "navToggleBtn" });
                  }}
                >
                  {hamburger}
                </button>
              </div>

              <div className=" hidden md:flex items-center  ">
                <Link to="register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    
      </Routes>

      {/* <div className=" w-100% text-white bg-blue-400 h-8 justify-around flex">
          <span>LOgo</span>

          <ul className="flex ">
            <li>
              
            </li>
            <li>
             
            </li>
            <li>
              <Link to="/blogs" className="ml-1 lg:ml-8 md:ml-6 sm:ml-4">
                Blogs
              </Link>
            </li>
          </ul>

          <span>
            <ul className="flex">
              {isLogin}
              <br />
              {isRegister}
            </ul>
          </span>
        </div>
       */}
    </>
  );
}

export default Navbar;
