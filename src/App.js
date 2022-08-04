import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { postsData } from "./reduxToolkit/reducerTool";
import store from "./reduxToolkit/storeTool";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/Main";
import axios from "axios";
import jwt from "jwt-decode";
import { ALL_USER_COMMENTS } from "./reduxToolkit/reducerTool";
 function App() {
  const dispatch = useDispatch();

      //LOCAL STORAGE TOKEN
    let localStorageToken = localStorage.getItem("token");

//CHECK IF USER IS NOT LOGOUT
    if (localStorageToken !== null) {
      
      const decodedToken = jwt(localStorageToken);
      
     //IF USER NOT LOGOUT THEN SEND ALL TOKEN VALUE TO REDUX STORE
    dispatch({ type: "USER_INFO_TOKEN", payload: decodedToken.userDetail[0] });
    
        //INITIAL ALL POSTS RENDER REDUX STORE
     dispatch(postsData())





    }
  
  return (
    <>
   
      <div className="App">
      
        <Main />  
      </div>
      
    </>
  );
}

export default App;
