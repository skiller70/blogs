import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import jwt from "jwt-decode";
import { Navigate } from "react-router";
function Login(props) {
  //USER INPUT VALUE
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //REDUX METHODS

  const dispatch = useDispatch();
  const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username;
  });
  
  //NAVIGATION
  const nav = useNavigate();

  //ON SUBMIT HANDEL
  const userLogin = async (e) => {
    e.preventDefault();

    const userInfo = { username: username, password: password };

    const jwt_response = await axios
      .post("http://localhost:5000/api/test/login", userInfo)
      .then((res) => {
        return res.data;
      });

    //CHECK IF USER FOUND OR NOT FOUND

    if (jwt_response == "user not found") {
      alert("user not found");
      return nav("/login");
    } else if (jwt_response == "login failed") {
      alert("login failed something went wrong");
      return nav("/login");
    } else {
      //IF USER FOUND THEN STORE IN LOCAL STORAGE
      const decoded = jwt(jwt_response);

      localStorage.setItem("token", jwt_response);
      // IF USER FOUND THEN STORE IN REDUX
      dispatch({ type: "increment", payload: decoded.userDetail[0] });
      nav("/");
    }
  };

  //CONDITIONAL RENDERING
  if (isUser) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        <h3>User Login</h3>
        <br />
        <label >
          {" "}
          UserName
          <br />
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" mt-5 bg-gray-300 rounded-md"
            type="text"
          />
        </label>

        <label >
          {" "}
          Password
          <input
            className=" ml-5 bg-gray-300 rounded-md "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </label>
        <br />
        <button
          onClick={userLogin}
          className="mt-4 rounded-md bg-blue-400 pl-5 pr-5 p-x-2 hover:bg-purple-500  "
        >
          Login
        </button>
      </>
    );
  }
}

export default Login;
