import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import Reduxtest from "./homeComponent/Reduxtest";
import Aboutcompo from "./Aboutcompo";
import NewUserPost from "./helpComponents/NewUserPost";
function About(props) {
  // useEffect(() => {
    
  // },[]);
  // const [token, setToken] = useState("");

  // const myNum = useSelector((state) => {
  //   return state.custom.number;
  // });

  // const ggwp = () => {
  //   axios
  //     .post("http://localhost:5000/api/test/genrate", {
  //       name: "karthik",
  //       username: "singhkarthik",
  //     })
  //     .then((res) => {
  //       setToken(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const jwtVerify = () => {
  //   console.log(token);
  //   axios
  //     .post(
  //       "http://localhost:5000/api/test/userDetail",
  //       { body: { name: "skiller" } },
  //       { headers: { authorization: token } }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      {/* <h1>hello this is about page sadas gsadsa </h1>
      <h2>ggwp {myNum}</h2>
      <button onClick={ggwp}>click me </button>
      <button onClick={jwtVerify}>jwtverify</button>
 <Reduxtest /> */}


 <Aboutcompo/>

 {/* <NewUserPost/> */}



    </>
  );
}

export default About;
