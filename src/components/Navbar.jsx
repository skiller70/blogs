import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Login from "./Login";
import Register from "./register/Register";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./Logout";
import ShowAllComments from "./helpComponents/ShowAllComments";
import { Suspense } from "react";
import { faS, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavToggle from "./NavToggle";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Blogs = React.lazy(() => import("./Blogs"));

function Navbar(props) {
  const dispatch = useDispatch();

  // useEffect(()=>{

  // },[match])
  //CHECKING USERNAME IN REDUX
  const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username;
  });
  const navToggle = useSelector((state) => {
    return state.custom.navToggle;
  });

  //IF USER EXIST INSIDE THE REDUX THEN SHOW LOGOUT ELSE LOGIN
  const isLogin = isUser ? (
    <Logout />
  ) : (
    <Link to="/login" className="text-gray-600 font-semibold">
      Login
    </Link>
  );

  const isRegister = isUser ? (
    false
  ) : (
    <Link to="/register" className=" text-gray-600 font-semibold">
      Register
    </Link>
  );

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
                  <Link to="/" className="   text-gray-600 font-semibold    ">
                    Home
                  </Link>

                  <Link to="/about" className="text-gray-600 font-semibold">
                    About
                  </Link>

                  <Link to="/blogs" className="text-gray-600 font-semibold">
                    Blogs
                  </Link>
               
                </div>
              </div>

              {/* LOGIN SIGN UP */}

              <div className=" mx-5 flex gap-8">
                <div className="  hidden md:flex items-center ">{isLogin}</div>

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
                  {isRegister}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div></div>

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
        <Routes>
          <Route
            exact
            pathname="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            pathname="/about"
            element={
              <Suspense>
                <About />
              </Suspense>
            }
          ></Route>
          <Route
            path="/blogs"
            element={
              <Suspense>
                <Blogs />
              </Suspense>
            }
          ></Route>
          <Route pathname="/login" element={<Login />}></Route>
          <Route pathname="/logout" element={<Home />}></Route>
          <Route exact pathname="/register" element={<Register />}></Route>
          <Route
            pathname="/comments/:commentId"
            element={<ShowAllComments />}
          ></Route>
          <Route pathname="/navToggle" element={<NavToggle />}>
            {" "}
          </Route>
        </Routes>
      </>
    
  );
}

export default Navbar;
