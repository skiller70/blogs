import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socketIO from 'socket.io-client'
import UserMessage from './message/UserMessage'
import NavToggle from "./NavToggle";
const ENDPOINT = "http://localhost:5000/"
// const socket = socketIO(ENDPOINT,{transports:['websocket']});

function About(props) {
const dispatch = useDispatch();


  return (
    

	<div>
		<NavToggle/>

	</div>







  );
}

export default About;
