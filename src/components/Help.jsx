import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserPost from "./helpComponents/UserPost";
import CreatePost from "./helpComponents/CreatePost";
function Help(props) {
  const userPosts = useSelector((state) => {
    return state.custom.getAllPost;
  });
  const [posts,setPosts] = useState('')
    useEffect(()=>{
      const postDetails = userPosts.map((item,index) => {
        return (
          
            <UserPost
              title={item.title}
              date={item.date}  
              likes={item.likes.length}
              text={item.text}
              id={item._id}
            />
          
        );
      });

      setPosts(postDetails)
    },[userPosts])
 

  return (
    <div className="bg-grey-200  w-screen  h-screen">
      <CreatePost />
      {posts}
    </div>
  );
}

export default Help;
