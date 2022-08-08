import React, {  useState } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

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
  
const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username;
  });
 
  const navToggle = useSelector(state=> state.appUi.NAVBAR_TOGGLE)

  const [focus, setFocus] = useState({ name: false });
  const [canSubmit, setCanSubmit] = useState(false);






  const toggleClass = navToggle
  ? " absolute top-1/2   left-1/2 transform -translate-x-1/2 -translate-y-[-25px]   justify-center items-center "
  : " absolute top-1/2   left-1/2 transform -translate-x-1/2 -translate-y-1/2   justify-center items-center ";




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

  } else {
    return (
<>
<div className=" h-screen bg-[#e2e8f0] ">
      <div className=" h-screen clip-your-needful-style bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  "></div>

        <div className={toggleClass} >
          
        <div className="w-[275px] h-[400px] rounded-lg flex  shadow-md justify-center items-center     bg-white ">
          {/* inside block */}
<Formsy
            onValidSubmit={submit}
            onValid={enableButton}
            onInvalid={disableButton}
            className=" w-[235px] h-[400px] flex flex-col justify-evenly "
          >
           
           
           <div className="">
        
           <RegisterInputItem
              validations="minLength:3,maxLength:12,isAlpha"
              validationErrors={errorMessage}
              name="name"
              placeholder={"Enter your name"}
              icon={faUser}
              required
              type="text"
            />


           </div>
           
           <div className=" leading-3 ">
           <RegisterInputItem
              validations="minLength:6,isAlphanumeric,maxLength:16 " 
              validationErrors={usernameError}
              name="username"
              placeholder={"Enter your username"}
              icon={faUserCheck}
              required
              type="text"
            />

           </div>
           
   <div>
   <RegisterInputItem
              validations="isEmail"
              validationErrors={errorMessage} 
              name="email"
              placeholder={"Enter your email"}
              icon={faEnvelope}
              required
              type="email"
              
            />

   </div>
     
       
<div>

<RegisterInputItem
              validations="minLength:8,maxLength:25 "
              validationErrors={passwordError}
              name="password"
              icon={faLock}
              placeholder={"Enter your password"}
              required
              type="password"
            />

</div>
            <div className="leading-3">
            <RegisterInputItem
              validations="equalsField:password,minLength:8"
              validationErrors={passwordError}
              name="confirmPassword"
              placeholder={" Your confirm password"}
              icon={faLock}
              required
              type="password"
            />
            </div>

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
