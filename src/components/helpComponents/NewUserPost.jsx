// import React, { Component } from "react";
// import { connect } from "react-redux";
// import axios from "axios";
// import { postsData } from "../../reduxToolkit/reducerTool";
// class NewUserPost extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { userLike: false, postAuthor: false };
//   }

//   // COMPONENT DID MOUNT




//     //CHECK IF POST AUTHOR LOG IN
  


//   // ALL METHODS*****************************************************

//   //INITIAL CALL INSIDE COMPONENT DID MOUNT
//   IS_USER_LOGGED_IN = (val) => {
//     this.setState({ postAuthor: val});
//   };

//   //LIKE USER POST
//   likePost = (e) => {
//     e.preventDefault();
//     if(this.props.IS_USER_LIKE == false && this.props.userId !== undefined){
//       axios
//       .get(
//         `http://localhost:5000/api/test/userLikes?id=${this.props.id}&value=increment`,
//         {
//           headers: {
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       )
//       .then((res) => {
//         this.setState({ userLike: true });
//         this.props.asyncPost();
//       });

//     }else if(this.props.IS_USER_LIKE == true && this.props.userId !== undefined){

//       axios 
//       .get(
//         `http://localhost:5000/api/test/userLikes?id=${this.props.id}&value=decrement`,
//         {
//           headers: {
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       )
//       .then((res) => {
//         this.setState({ userLike: false });
//         this.props.asyncPost();
//       });
//     }
    
//   };

//   render() {
//     //CONDITIONAL RENDER
   

//     console.log(this.props)
//     //IF USER ALREADY LIKED
//     const likeColor = this.props.likes ? "red" : "white";
//     const likeSecondColor = this.props.likes ? "red" : "grey";
//     //IF AUTHOR IS LOGGED IN
//     const deletePost = this.state.postAuthor ? <button> delete</button> : "sss";


//     //********************************************************* */
//     return (
//       <div>
//         <div className="flex justify-center font-karla bg-gray-200      ">
//           <div className=" flex flex-col my-10 max-w-lg md:max-w-xl  bg-white lg:shadow-lg lg:rounded-lg ">
//             <img
//               className=" lg:rounded-t-lg  max-h-56 "
//               src={require(`./images/${this.props.postImages}`)}
//               alt=""
//             />

//             <div>
//               <p className=" flex pt-4 pl-6 justify-center sm:justify-start ">
//                 this is my post
//               </p>
//               <h1 className="flex pt-4 pl-6 text-2xl text-gray-800 font-bold md:text-3xl justify-center sm:justify-start ">
//                 {this.props.title}
//               </h1>
//               <p className=" py-4  pl-6 first-letter md:text-start text-sm ">
//                 {this.props.text}
//               </p>
//               <div className=" flex  justify-evenly my-5 ">
//                 <div> {this.props.date}</div>
//                 <div>
//                   <button>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="gray"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 <div>
//                   <button onClick={this.likePost}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8"
//                       fill={likeColor}
//                       viewBox="0 0 24 24"
//                       stroke={likeSecondColor}
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                       />
//                     </svg>
//                   </button>
//                   <p> {this.props.likes}</p>


//                   {deletePost}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProp = (state) => {
//   const allUsersLikes =  state.custom.getAllPost.map((item) => {
//     return item.likes;
//   });

//   let userLikes = false;
//  allUsersLikes.forEach((item, index) => {
//     if (item.includes(state.custom.USER_TOKEN_VALUE._id)) {
//       userLikes = true;
//     }
//   });

//   return {
//     //REDUX USER ID
//     userId: state.custom.USER_TOKEN_VALUE._id,
//     //REDUX USER POST
//     allUsersPost: state.custom.USER_TOKEN_VALUE.posts,
//     //REDUX POST LIKE
//     IS_USER_LIKE: userLikes,
//     // ALL USERS POSTS
//     ALL_POST: state.custom.getAllPost,
//   };
// };

// const mapDispatchToProp = (dispatch) => {
//   return {
//     asyncPost: () => {
//       dispatch(postsData());
//     },
//   };
// };

// export default connect(mapStateToProp, mapDispatchToProp)(NewUserPost);
