import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserPost from "./helpComponents/UserPost";
import CreatePost from "./helpComponents/CreatePost";
;

function Blogs(props) {
  //ALL USERS POSTS FROM REDUX

  const {getAllPost,isLoading} = useSelector((state) => {
    return state.custom
  });

 
  //THIS VARIABLE SATE FOR STORING ALL USER POST FOR USER COMPONENT
  const [posts, setPosts] = useState("");
 
  useEffect(() => {
    
    const postDetails = getAllPost.map((item, i) => {
      return (
        <UserPost 
          key={i}
          title={item.title}
          date={item.date}
          likes={item.likes}
          text={item.text}
          postImages={item.image}
          id={item._id}
          author={item.author}
          comment={item.postComment}
        />
      );
    });

    setPosts(postDetails);
   
  }, [getAllPost]);
  
  if(isLoading){
    return( <div className="flex  justify-center items-center ">
    <div
      className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent    border-solid border-orange-300 rounded-full"
      role="status"
    >
      <span className="visually-hidden"></span>
    </div>
  </div>)
  }else{

    return (
      <div className="bg-[#e2e8f0] w-screen  h-screen">
        <CreatePost />
        {posts}
      </div>
    );
  }

  
}

export default Blogs;
