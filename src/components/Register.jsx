import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
function Register(props) {

const isUser = useSelector((state)=>{ return state.custom.USER_TOKEN_VALUE.username})
//CHECK IF USER EXIST THEN GO TO HOME 
if(isUser){

return <Navigate to="/" replace/>
}else{

    return (
        <div>
            <h1>register</h1>
        </div>
    );

}


}

export default Register;