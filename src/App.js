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
 function App() {
  const dispatch = useDispatch();

  
    let localStorageToken = localStorage.getItem("token");

    if (localStorageToken !== null) {
      
      const decodedToken = jwt(localStorageToken);
     
    dispatch({ type: "increment", payload: decodedToken.userDetail[0] });
      

    }
     dispatch(postsData())

   
  return (
    <>
      <div className="App">
        <Main />
      </div>
    </>
  );
}

export default App;
