import React, { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postsData } from "../../reduxToolkit/reducerTool";
import AllUsersComments from "./AllUsersComments";
import moment from "moment";
import { useParams } from "react-router-dom";
import REDUX_TEST from "../../reduxToolkit/reducerTool";
import { createSelector } from "reselect";
function ShowAllComments(props) {
  let param = useParams();
  const FILTER_COMMENTS = createSelector(
    (state) => state.postComment.ALL_COMMENTS,
    (posts) => {
      if (posts) {
        return posts.filter((item) => {
          if (item.POST_ID_OF_COMMENT.includes(param.commentId)) {
            return item;
          }
        });
      } else {
        return null;
      }
    }
  );

  const { userName, commentDate, userComment } = useSelector(
    (state) => state.postComment.dummyComment
  );
const {postLoading} = useSelector(state=> state.postComment)
  const All_POST_COMMENTS = useSelector(FILTER_COMMENTS);
  if (All_POST_COMMENTS) {
    return (
      <>
        {All_POST_COMMENTS.map((item, index) => {
          return (
            <div key={index} className="   list-none border py-3">
              <div className="flex px-10 flex-row max-w-lg items-center  justify-evenly  ">
                <li className="font-semibold">
                  {item.commentAuthor.username}{" "}
                </li>
                <li className=" text-sm">
                  {moment(item.commentDate).fromNow()}
                </li>
              </div>
              <li>{item.userComment} </li>
            </div>
          );
        })}
        {userName ? (
          <div className="   list-none border py-3">
            <div className="flex px-10 flex-row max-w-lg items-center  justify-evenly  ">
              <li className="font-semibold">{userName} </li>
              <li className=" text-sm">{commentDate}</li>
            </div>
            <li>{userComment} </li>
          </div>
        ) : null}

        <AllUsersComments POST_ID={param.commentId} />
      </>
    );
  } else if (postLoading) {
    return (
      <>
        {" "}
        <h1>Please wait...</h1>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <h1>comment not found</h1>
      </>
    );
  }
}
export default ShowAllComments;
