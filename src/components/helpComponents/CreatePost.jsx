import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();



//METHODS 

  const onHandle = (e) => {
    e.preventDefault();
    
    
    
    if(title !== ""&& text !== ""){



      const url = "http://localhost:5000/api/test/posts";
      axios
           .post(
             url,
             { title: title, text: text },
             {
               headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
             }
           )
           .then((res) => {
             dispatch({ type: "posts", payload: res.data });
           })
           .catch((err) => {
             throw err;
           });



    }else{
      alert('please insert text')
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
  };

  return (
    <div className=" flex bg-gray-200 justify-center  font-karla">
      <div className="  rounded-lg shadow-md bg-white mt-5 w-[330px] h-56 ">
        <div>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            
            className=" rounded px-2 px-3 shadow border  my-5  text-gray-700  leading-tight  focus:shadow-outline w-72 h-8"
            
          />

        </div>
        <div>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Text"
            className="  px-2 py-3 align-baseline inline-block appearance-none w-72 h-26 rounded shadow border  my-5  text-gray-700   focus:shadow-outline "
          />
        </div>
        <div>
          <button
            className=" py-1 hover:bg-slate-600 w-32 rounded-md my-4  bg-[#AC4B31]  text-white  "
            onClick={onHandle}
          >
            Create post
          </button>
        </div>
      </div>

      {/* <h3>hello {title}</h3>
      <h3>text {text}</h3> */}
    </div>
  );
}

export default CreatePost;
