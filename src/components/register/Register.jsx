import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  faUser,
  faCoffee,
  faEnvelope,
  faUserCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import RegisterInputItem from "./RegisterInputItem";
import Formsy  from "formsy-react";
function Register(props) {
  const dispatch  = useDispatch()
  const navigate = useNavigate(); 
const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username;
  });
 const NAVIGATION  = useSelector(state=>state.register.NAVIGATION)

useEffect(()=>{
if(NAVIGATION){
  navigate("/home")
}

},[NAVIGATION])


  const [focus, setFocus] = useState({ name: false });
  const [canSubmit, setCanSubmit] = useState(false);

  const errorMessage = {
    maxLength:"12 character should be max length",
    minLength: "Name should be 3 to 12 characters",
    isAlpha: "Name must contain characters in name",
     isEmptyString: "please enter username",
    isEmail:"Please enter a valid email address",
    isLength: "password must contain at least 8 characters"
  };

  const passwordError={
    equalsField: "Password and confirm password does not match",
    minLength: "password must contain at least 8 characters",
    maxLength:"25 character should be max length",

  }
const usernameError = {
  isAlphanumeric: "Username must be alphanumeric",
  maxLength:"16 character should be max length",
  minLength:"username must be at least 6 to 15 characters in length"
}
 
  const disableButton = () => {
    setCanSubmit(false);
  };

  const enableButton = () => {
    setCanSubmit(true);
  };

  const submit = (model) => {

    dispatch({type:"REGISTER_USER",payload:model })
  };


  const activeButton = <button  className="h-9 rounded-lg bg-violet-600  hover:bg-[#ec4899]    font-semibold        text-white  text-lg  disabled={!canSubmit} "type="submit" >
  Register
</button>;
  const inActiveButton = <button   className="h-9 rounded-lg  text-gray-600 font-semibold bg-slate-300 "type="submit" disabled={!canSubmit}>
  Register
</button>;

  //CHECK IF USER EXIST THEN GO TO HOME
  if (isUser) {
    return <Navigate to="/" replace />;
  } else {
    return (
<>
<div className=" bg-[#e2e8f0]">
      <div className=" h-screen clip-your-needful-style bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  "></div>

        <div className="grid  gap-5 justify-evenly items-center     bg-transparent absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2   " >
          
        <div className="w-[275px] h-[400px] rounded-lg flex  shadow-md justify-center items-center      bg-white ">
          {/* inside block */}
<Formsy
            onValidSubmit={submit}
            onValid={enableButton}
            onInvalid={disableButton}
            className=" w-[235px] h-[375px] flex flex-col justify-evenly "
          >
            <RegisterInputItem
              validations="minLength:3,maxLength:12,isAlpha"
              validationErrors={errorMessage}
              name="name"
              placeholder={"Enter your name"}
              icon={faUser}
              required
              type="text"
            />

            <RegisterInputItem
              validations="minLength:6,isAlphanumeric,maxLength:16 " 
              validationErrors={usernameError}
              name="username"
              placeholder={"Enter your username"}
              icon={faUserCheck}
              required
              type="text"
            />
            <RegisterInputItem
              validations="isEmail"
              validationErrors={errorMessage} 
              name="email"
              placeholder={"Enter your email"}
              icon={faEnvelope}
              required
              type="email"
              
            />

            <RegisterInputItem
              validations="minLength:8,maxLength:25 "
              validationErrors={passwordError}
              name="password"
              icon={faLock}
              placeholder={"Enter your password"}
              required
              type="password"
            />

            <RegisterInputItem
              validations="equalsField:password,minLength:8"
              validationErrors={passwordError}
              name="confirmPassword"
              placeholder={" Your confirm password"}
              icon={faLock}
              required
              type="password"
            />

      {canSubmit?activeButton:inActiveButton}


          </Formsy>

        <div className=" bg-slate-600"></div>
      </div>


       

  


        </div>

      </div>
      </>
    );
  }
}

export default Register;
