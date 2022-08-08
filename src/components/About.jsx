import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socketIO from 'socket.io-client'
import UserMessage from './message/UserMessage'

const ENDPOINT = "http://localhost:5000/"
// const socket = socketIO(ENDPOINT,{transports:['websocket']});

function About(props) {
const dispatch = useDispatch();
const {navToggle} = useSelector(state=>state.custom)
console.log(navToggle)
if(navToggle){
	return(<></>)
  }
	return (
    

		<div>
		
	
		</div>
	
	
	
	
	
	
	
	  );
  }

  


export default About;
