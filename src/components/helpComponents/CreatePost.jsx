import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { postsData } from "../../reduxToolkit/reducerTool";
import { createPost } from "../../reduxToolkit/reducerTool";
import { set } from "mongoose";
function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectfile, setSelectfile] = useState(null);
  const [isloading,setIsloading] = useState(false)
  const dispatch = useDispatch();

  //METHODS

 
  const  onHandle =  async (e) => {
    e.preventDefault()

    //IF CREATE POST INPUT UNDEFINED 
    if (title !== "" && text !== "") {
      //NEW FORM VARIABLE
      const formData = new FormData();
    //IMAGE FILE
    formData.append("BlogImage", selectfile);
    //POST DATA
    formData.append("title",title )
    formData.append("text",text )
            //POST REQUEST FOR CREATE USER BLOG POST
     const url = "http://localhost:5000/api/test/posts";
                      //STATE INPUT VALUE
  const CREATE_POST_DATA = await axios.post(url,formData,{
                // TOKEN AUTHENTICATION 
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
          'Content-type': 'multipart/form-data'
        })
        .then((res) => {
          
          return res.data
          
        })
        .catch((err) => {
          throw err;
        });

        dispatch(postsData(CREATE_POST_DATA))
      






    } else {
      alert("please insert text");
    }
   
  };

if(isloading){
  return( <div className="flex justify-center items-center">
  <div
    className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent    border-solid border-orange-300 rounded-full"
    role="status"
  >
    <span className="visually-hidden"></span>
  </div>
</div>)
}else{


  return (
    <div className=" flex bg-[#e2e8f0] justify-center  font-karla">

    


      <div className=" mb-10 rounded-lg shadow-md bg-white mt-5 w-[330px] h-56 ">
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
          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <label
                htmlFor="formFileSm"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Small file input example
              </label>
              <input
                onChange={(e) => {
                  setSelectfile(e.target.files[0]);
                }}
                className="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                
                type="file"
              ></input>
            </div>
          </div>
        </div>

        <div className=" mb-5 ">
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








}

export default CreatePost;
