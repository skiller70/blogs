import React from "react";
import { Link } from "react-router-dom";
import NavToggle from "./NavToggle";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import  {goBack} from "redux-first-history";
import { Suspense } from "react";
import { faS, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { replace } from "redux-first-history";
function Navbar(props) {
  const dispatch = useDispatch();

  // useEffect(()=>{

  // },[match])
  //CHECKING USERNAME IN REDUX

  const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username;
  });

const[navbarToggle,setNavToggle] = useState(false)

const navToggleBtn = ()=>{

  setNavToggle(val=>!val)
}

  // const authUser = useSelector((state) => state.register.AUTH_USER);

  //IF USER EXIST INSIDE THE REDUX THEN SHOW LOGOUT ELSE LOGIN

  const hamburger = navbarToggle? (
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
    
    <nav className="  bg-[#e2e8f0]  ">
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

                <button
                  onClick={() => {
                    
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
                <Link to="/login">Login</Link>
              </div>

              <div className="  flex md:hidden  self-center">
                <button
                  className="hover:text-blue-300"
                  onClick={navToggleBtn}
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
        {navbarToggle? <NavToggle/>:null}
      </nav>


    

      
    </>
  );
                
}

export default Navbar;
