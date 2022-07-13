import React from "react";
import Navbar from "./Navbar";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function Main(props) {
  const dispatch = useDispatch();



  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Main;
