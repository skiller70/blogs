import axios from "axios";
import { set } from "mongoose";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsData } from "../../reduxToolkit/reducerTool";
import { useNavigate } from "react-router";
import moment from "moment";
import AllUsersComments from "./AllUsersComments";
import ShowAllComments from "./ShowAllComments";
import LikePosts from "./LikePosts";
function UserPost(props) {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [postauthor, setPostauthor] = useState(false);
  const [isLoading,setIsloading]  = useState(false)

  
  const USER_ID = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE._id;
  });
  // const { isLoading } = useSelector((state) => {
  //   return state.custom;
  // });


 const deletePost = (e) => {
    e.preventDefault();
    axios.get(
        `http://localhost:5000/api/test/userLikes?id=${props.id}&value=deletepost`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res)=>{})
      .catch((err) => {
        console.log("delete went wrong");
      });
  };

 
 
  ///

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent    border-solid border-orange-300 rounded-full"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center font-karla bg-gray-200      ">
        <div className=" flex flex-col my-10 max-w-lg md:max-w-xl  bg-white lg:shadow-lg lg:rounded-lg ">
          <img
            className=" lg:rounded-t-lg  max-h-56 "
            src={require(`./images/${props.postImages}`)}
            alt=""
          />

          <div>
            <p className=" flex pt-4 pl-6 justify-center sm:justify-start ">
              this is my post
            </p>
            <h1 className="flex pt-4 pl-6 text-2xl text-gray-800 font-bold md:text-3xl justify-center sm:justify-start ">
              {props.title}
            </h1>
            <p className=" py-4  pl-6 first-letter md:text-start text-sm ">
              {props.text}
            </p>
            <div className=" flex  justify-evenly my-5 ">
              <div>{moment(props.date).fromNow()}</div>
              <div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <LikePosts  LIKE_COUNT={props.likes} POST_ID={props.id}/>
              </div>
              <div>
                {postauthor ? (
                  <button onClick={deletePost}> delete</button>
                ) : (
                  ""
                )}
              </div>
                   


            </div>
            {/* USER COMMENT */}
            <div>

                  <Link to={`/comments/${props.id}`} >viewPost</Link>
            {<AllUsersComments POST_ID={props.id} USER_COMMENT={props.comment}/>}
            
            </div>
          
          <div>
         
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPost;
