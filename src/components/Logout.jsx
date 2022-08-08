import React from "react";
import { Link } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

function Logout(props) {
  // const nav = useNavigate();
  const dispatch = useDispatch();
  //IF USER WANT LOGOUT THEN SEND  LOGOUT REQUEST TO SERVER
  const userLogout = () => {
    //CLEAR LCOAL STORAGE
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT", payload: "" });
    // nav("/login");
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
