import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postsData } from "../../reduxToolkit/reducerTool";
import AllUsersComments from "./AllUsersComments";
import moment from "moment";
import { useParams } from "react-router-dom";
import REDUX_TEST from "../../reduxToolkit/reducerTool";

function ShowAllComments(props) {
  let  param= useParams();
  const ALL_USER_COMMENTS = useSelector(state=> state.custom.getAllComment)
  const isLoading = useSelector(state=> state.custom.isLoading)
  console.log(ALL_USER_COMMENTS)
  const [allpostcomment,setAllpostcomment] = useState([])
const dispatch = useDispatch(); 
useEffect(()=>{
if(ALL_USER_COMMENTS){
  ALL_USER_COMMENTS.forEach((item)=>{ if(item.POST_ID_OF_COMMENT.includes(param.commentId)){
  setAllpostcomment([...allpostcomment,item])
 }})

 
}

},[ALL_USER_COMMENTS])
console.log(allpostcomment)

  
//  console.log(props.POST_ID)
  
//   console.log(ALL_USER_COMMENTS)
  
  // console.log(ALL_USER_COMMENTS)
  if (!ALL_USER_COMMENTS) {
    return (
      <>
        <h1>comment not found</h1>
      </>
    );
  } else {
    return (
      <>
      {console.log('render')}
        <div>
          {ALL_USER_COMMENTS.map((item, index) => {
          
            return (
              <div key={index} className="   list-none border py-3">
                <div className="flex px-10 flex-row max-w-lg items-center  justify-evenly  ">
                  <li className="font-semibold">{item.username} </li>
                 {isLoading?<li className=" text-sm">{moment(item.date).fromNow()}</li>:<h2>posting...</h2>} 
                </div>
                <li>{item.comment} </li>
              </div>
            );
          })}
        </div>
          <AllUsersComments POST_ID={param.commentId}/>
        
      </>
    );
  }

}
export default ShowAllComments;
