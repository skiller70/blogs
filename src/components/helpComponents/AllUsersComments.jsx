import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import ShowAllComments from "./ShowAllComments";
import { POST_COMMENT } from "../../reduxToolkit/reducerTool";

function AllUsersComments(props) {
  const [user_comments, setUser_comments] = useState("");
  const USER_ID = useSelector((state) => state.custom.USER_TOKEN_VALUE._id);
  const dispatch = useDispatch()
  // console.log(props)
  const allComment = useSelector(state=> state.custom.getAllComment)
  console.log(allComment)
  const userComments = () => {

    //COMMENT TESTING
    if(user_comments){

    const COMMENT_DETAIL = {USER_ID,user_comments,POST_ID :props.POST_ID}

    dispatch(POST_COMMENT(COMMENT_DETAIL))
      // const userCommentApi = `http://localhost:5000/api/test/userComments?userId=${USER_ID}&userComment=${user_comments}&postId=${props.POST_ID}`;
      // axios
      //   .get(userCommentApi, {
      //     headers: {
      //       authorization: `Bearer ${localStorage.getItem("token")}`, 
      //     },
      //   })
      //   .then((res) => { console.log(res.data)})
      //   .catch((err) => {
      //     console.log("delete went wrong");
      //   });
  
      // setUser_comments(null);
    }
  
  };
console.log(props.POST_ID)
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setUser_comments(e.target.value);
          }}
          type="text"
        />

        <button onClick={userComments}>post Comment</button>
      </div>






    </>
  );
}

export default AllUsersComments;
