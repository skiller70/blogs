import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../reduxToolkit/storeTool";
import axios from "axios";
import { useNavigate } from "react-router";

import Logout from "./Logout";
import jwt from "jwt-decode";
import { Navigate } from "react-router";
import NewUserPost from "./helpComponents/NewUserPost";
function Home(props) {
  const nav = useNavigate();
  const dispatch = useDispatch();

const userName = useSelector((state)=>{return state.custom.USER_TOKEN_VALUE.username})


  // IF INSIDE LOCAL STORAGE TOKEN EXIST  
  const [userdata,setUserdata] = useState(false)
 

  if(userdata){
    return <Navigate to="/about" replace />
  }else{
    return (
      <div className=" bg-creame h-screen w-screen">
        <h1 className="text-red-400">hello this is home component</h1>
        <h1> hello {userName}</h1>
  {console.log('render')}
        <button onClick={() => {}}> click me </button>
        <button className="bg-gray-400" onClick={()=>{ }}>
          click me
        </button>
    


         



           </div>
    );
    
  }


}

export default Home;
