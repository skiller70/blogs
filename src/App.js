import "./App.css";

import { postsData } from "./reduxToolkit/reducerTool";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import store from "./reduxToolkit/storeTool";
import { ConnectedRouter } from 'connected-react-router'
import { Route,Routes } from "react-router-dom";
import jwt from "jwt-decode";
import Register from "./components/register/Register"
import Home from "./components/Home"
import About from "./components/About";
import Blogs from "./components/Blogs";
import {createBrowserHistory} from "history"

export const history = createBrowserHistory()

function App() {
  const dispatch = useDispatch();
   
  //LOCAL STORAGE TOKEN
  let localStorageToken = localStorage.getItem("token");

  //CHECK IF USER IS NOT LOGOUT
    // if (localStorageToken !== null) {
    //   const decodedToken = jwt(localStorageToken);

    //   //IF USER NOT LOGOUT THEN SEND ALL TOKEN VALUE TO REDUX STORE
    //   // dispatch({ type: "USER_INFO_TOKEN", payload: decodedToken.userDetail[0] });

    //   //INITIAL ALL POSTS RENDER REDUX STORE
    //   dispatch(postsData());
    // }

  return (
    <>
      <div className="App">
        
        <Main />
   
      </div>
    </>
  );
}

export default App;
