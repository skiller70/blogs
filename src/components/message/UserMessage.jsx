import React, { useEffect } from "react";
import { useState } from "react";
import ScrollToBottom from 'react-scroll-to-bottom'
import MessageItem from "./MessageItem";
import io from 'socket.io-client'
const ENDPOINT = 'http://localhost:5000/'

function UserMessage(props) {

  const [inputMessage,setInputMessage] = useState("")
  const [storeMessage,setStoreMessage] = useState('')

  const socket = io(ENDPOINT,{transports : ['websocket']})
    useEffect(()=>{
    // socket.on("connect",()=>{
    //     alert("server has connected to the clint")
    // })

    
    },[])

    socket.on("returnMessage",(data)=>{
      console.log(data.name)
    })  
    







 
    
    const onClickHandel =(e)=>{
        e.preventDefault();
        
        setStoreMessage(val=> [...val,inputMessage])
        socket.emit("firstConnect",{name : 'skiller',chat : inputMessage })
        socket.off()
        setInputMessage("") 
    }









  return (
    <>
      {/* BACKGROUND */}
      <div className="flex justify-center bg-[#E9D5DA]  max-w-full h-screen items-center">
        {/* CHAT SCREEN */}
        <div className=" w-[300px] flex flex-row no-scrollbar rounded-lg  h-96 bg-[#417D7A]">
          <div>
        <ScrollToBottom className=" flex  bg-slate-400 flex-row  overflow-auto">
                {storeMessage? storeMessage.map((val,i)=> <MessageItem key={i}item={val}/>) :null}

                </ScrollToBottom>
                </div>
          {/* BUTTON AND INPUT */}
          <div className="   m-3 sticky  ">
          
            <textarea value={inputMessage} onChange={(e)=>setInputMessage(e.target.value)}
              className=" rounded-md  shadow-sm px-2 py-[1.3px] "
              type="text"
            ></textarea>
            
            <button onClick={onClickHandel} className=" ml-3 bg-[#363062] px-3 py-0.4 text-white rounded-md ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMessage;
