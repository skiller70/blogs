import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Logout(props) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  //IF USER WANT LOGOUT THEN SEND  LOGOUT REQUEST TO SERVER
  const userLogout = () => {
    axios
      .get("http://localhost:5000/api/test/logout")
      .then((res) => {
        if (res.data == "successfull logout") {
          //CLEAR LCOAL STORAGE
          localStorage.removeItem("token");
          dispatch({ type: "logout", payload: "" });
          nav("/login");
        } else {
          return false;
        }
      })
      .catch((err) => {});
  };

  return (
    <div>
      <button onClick={userLogout}>
        <Link to="/logout">Logout</Link>
      </button>
    </div>
  );
}

export default Logout;
