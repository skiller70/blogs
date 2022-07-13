import axios from "axios";
import { set } from "mongoose";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "./images/building.jpg";
import { postsData } from "../../reduxToolkit/reducerTool";
import { useNavigate } from "react-router";
function UserPost(props) {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [deletebtn, setDeletebtn] = useState(false);
  const nav = useNavigate();

  const checkLikes = useSelector((state) => {
    return state.custom.getAllPost.map((item) => {
      return item.likes;
    });
  });
  const USER_POST_DETAIL = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.posts;
  });

  const personId = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE._id;
  });

  useEffect(() => {
    const USER_LIKE = checkLikes.map((item) => {
      return item.includes(personId);
    });
    if (USER_LIKE[0] === true) {
      setLike(true);
    }

    if(USER_POST_DETAIL !== undefined){

      const deleteBTN = USER_POST_DETAIL.map((item) => {
        return item.includes(props.id);
      });
    
      if (deleteBTN[0] === true) {
        setDeletebtn(true);
      } else {
        setDeletebtn(false);
      }
    }

    
  

  }, []);


  

  const likeCount = async (e) => {
    e.preventDefault();

    
    if (like == false && personId !== undefined) {
      axios
        .get(
          `http://localhost:5000/api/test/userLikes?id=${props.id}&value=increment`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          dispatch(postsData());
          setLike(true);
        });
    } else if (like == true && personId !== undefined) {
      axios
        .get(
          `http://localhost:5000/api/test/userLikes?id=${props.id}&value=decrement`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          dispatch(postsData());
          setLike(false);
        });
    } else {
      nav("/login");
    }
  };
  ///

  return (
    <div className="flex justify-center font-karla bg-gray-200      ">
      <div className=" flex flex-col my-10 max-w-lg md:max-w-xl  bg-white lg:shadow-lg lg:rounded-lg ">
        <img className=" lg:rounded-t-lg  max-h-56 " src={img1} alt="" />

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
            <div> {props.date}</div>
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
              <button onClick={likeCount}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill={like ? "red" : "white"}
                  viewBox="0 0 24 24"
                  stroke={like ? "red" : "grey"}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <p> {props.likes}</p>
            </div>
            <div>{deletebtn ? <button> delete</button> : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
