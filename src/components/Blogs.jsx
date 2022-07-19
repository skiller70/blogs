import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserPost from "./helpComponents/UserPost";
import CreatePost from "./helpComponents/CreatePost";
import NewUserPost from "./helpComponents/NewUserPost";
function Blogs(props) {
  //ALL USERS POSTS FROM REDUX
  const userPosts = useSelector((state) => {
    return state.custom.getAllPost;
  });

 
  //THIS VARIABLE SATE FOR STORING ALL USER POST FOR USER COMPONENT
  const [posts, setPosts] = useState("");
  const [isloading,setIsloading]= useState(false)
  useEffect(() => {
    setIsloading(true)
    const postDetails = userPosts.map((item, i) => {
      return (
        <NewUserPost 
          key={i}
          title={item.title}
          date={item.date}
          likes={item.likes.length}
          text={item.text}
          postImages={item.image}
          id={item._id}
        />
      );
    });

    setPosts(postDetails);
    setIsloading(false)
  }, [userPosts]);

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
      <div className="bg-grey-200  w-screen  h-screen">
        <CreatePost />
        {posts}
      </div>
    );
  }

  
}

export default Blogs;
