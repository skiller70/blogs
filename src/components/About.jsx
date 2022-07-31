import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch,useSelector } from "react-redux";
import { myAction } from "../reduxToolkit/TestReducer";
// import axios from "axios";
// import Reduxtest from "./homeComponent/Reduxtest";
import Aboutcompo from "./Aboutcompo";
import ShowAllComments from "./helpComponents/ShowAllComments";
import NewUserPost from "./helpComponents/NewUserPost";
import { asyncTest } from "../reduxToolkit/TestReducer";
import TestAbout from "./homeComponent/TestAbout"
function About(props) {
      const [checkC,setCheckC] = useState ([{name : 'rahul'}])
    const dispatch = useDispatch()

  const rdata = useSelector(state=> state.custom.POST_DATA)
 

const reduxTest = ()=>{
 
dispatch(myAction())

}


const checkArray = ()=>{

 dispatch({type:'REDUX_TEST',payload : '56'})

}



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


 {/* <NewUserPost/> */} 

{/* {testData.map((item)=>{ return(<> <h1>{item.name} </h1></>)})  } */}
{/* <h1>{testData}</h1>
<h1>{rdata}</h1> */}

<button onClick={reduxTest}> reduxTest</button>
{/* <h1>{checkC.map(item=> <><h1>{item.name}</h1></>)}</h1> */}
{console.log('render')}
<br />
<button onClick={checkArray}> postcheck</button>
<TestAbout/>

    </>
  );
}

export default About;
