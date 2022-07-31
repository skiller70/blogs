import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function AllUsersComments(props) {
  const [user_comments, setUser_comments] = useState("");
  const USER_ID = useSelector((state) => state.custom.USER_TOKEN_VALUE._id);
  const USER_NAME = useSelector(
    (state) => state.custom.USER_TOKEN_VALUE.username
  );
  const dispatch = useDispatch();
 

  const userComments = () => {
    //COMMENT TESTING
    if (user_comments) {
      const COMMENT_DETAIL = {
        USER_ID,
        user_comments,
        USER_NAME,
        POST_ID: props.POST_ID,
      };

      dispatch({ type: "POST_COMMENT", payload: COMMENT_DETAIL });
    }
  }
  

  return(<>
  

        <div>
          <input
            onChange={(e) => {
              setUser_comments(e.target.value);
            }}
            type="text"
          />
         
          <button onClick={userComments}>post Comment</button>
        </div>
     


  </>)


}
  
export default AllUsersComments;
