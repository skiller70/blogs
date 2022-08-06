import React, { useState } from "react"
import {Link} from "react-router-dom"
import {
  faUser,
  faCoffee,
  faEnvelope,
  faUserCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import LoginItems from "./LoginItems";
import Formsy from "formsy-react";
function Login(props) {
  const [canSubmit, setCanSubmit] = useState(false);

const errorMessage = {

  
}

  const disableButton = () => {
    setCanSubmit(false);
  };
  const enableButton = () => {
    setCanSubmit(true);
  };

  const submitButton = (model) => {};
  const activeButton = (
    <button
      className="h-10 rounded-lg bg-sky-500  hover:bg-indigo-500 w-[280px]   font-semibold   disabled={!canSubmit}     text-white  text-lg  "
      type="submit"
      disabled={!canSubmit}
    >
     Login
    </button>
  );

  const inActiveButton = (
    <button
      className="h-10 rounded-lg  w-[280px] text-gray-600 font-semibold bg-slate-300 "
      type="submit"
      disabled={!canSubmit}
    >
      Login
    </button>
  );

  return (
    <>
      <div className="  bg-[#e2e8f0]">
        <div className="  rotate-180 h-screen wave-clip bg-gradient-to-r from-indigo-500  to-[#22d3ee] "></div>
        <div className="     absolute top-1/2   left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid   justify-center   items-center  ">
          <div className=" w-[400px] h-[350px]  shadow-lg  flex  justify-center items-center rounded-xl bg-white">
            <Formsy
              className=" w-[300px] h-[320px] flex  items-center    justify-evenly   flex-col  "
              onValidSubmit={submitButton}
              onValid={enableButton}
              onInvalid={disableButton}
            >
              <div className=" rounded-lg w-[280px] h-10  border-2  focus-within:border-sky-500 ">  
                <LoginItems type="username" icon={faEnvelope} 
                  
                  validationErrors={errorMessage}
                  name="username"
                  placeholder={"Enter your username"}
                  required />
              </div>
              <div className=" rounded-lg w-[280px] h-10  border-2  focus-within:border-sky-500 ">
                <LoginItems
                  type="password"
                  icon={faLock}
                  validationErrors={errorMessage}
                  name="password"
                  placeholder={"Enter your username"}
                  required
                />
              </div>
             
              <div className=" rounded-lg  w-[280px] h-10 bg-red-300 outline-none ">
                {canSubmit ? activeButton : inActiveButton}
              </div>
  
              <div className=" mt-[-20px] h-9 text-gray-600 font-semibold ml-[-120px]"> No account?  <Link to="/register" className=" ml-1 font-semibold text-sky-500"> Sign up</Link> </div>
            </Formsy>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
