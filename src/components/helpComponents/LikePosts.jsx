import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postsData } from '../../reduxToolkit/reducerTool';
import { useEffect } from 'react';
function LikePosts(props) {
    const dispatch = useDispatch(postsData())
    const [like, setLike] = useState(false);
    const REDUX_STATUS = useSelector((state)=>{ return state.custom.getAllPost.find((item)=>item._id == props.POST_ID)})

    const USER_ID = useSelector((state) => {
        return state.custom.USER_TOKEN_VALUE._id;
      });
     
      useEffect(()=>{ 
      
         //CHECK IF USER ALREADY LIKED POST
    if (props.LIKE_COUNT.includes(USER_ID)) {
     
      setLike(true);
    }
      },[dispatch])



    const nav = useNavigate();
   
    const likePost= async (e) => {
        e.preventDefault();
    
        if (like == false && USER_ID !== undefined) {
          axios
            .get(
              `http://localhost:5000/api/test/userLikes?id=${props.POST_ID}&value=increment`,
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
            .then((res) => {
           dispatch(postsData())
              setLike(true);
            });
        } else if (like == true && USER_ID !== undefined) {
          axios
            .get(
              `http://localhost:5000/api/test/userLikes?id=${props.POST_ID}&value=decrement`,
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
            .then((res) => {
              dispatch(postsData())
              setLike(false);
            });
        } else {
          nav("/login");
        }
      };







    return (
        <>
            
            <button onClick={likePost}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill={like? "red" : "white"}
                    viewBox="0 0 24 24"
                    stroke={like? "red" : "grey"}
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <p> {REDUX_STATUS.likes.length}</p>
        </>
    );
}

export default LikePosts;