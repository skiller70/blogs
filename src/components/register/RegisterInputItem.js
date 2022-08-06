import React, { useEffect, useState } from 'react';
import {withFormsy} from "formsy-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCoffee,faEnvelope,faUserCheck,faLock} from "@fortawesome/free-solid-svg-icons";

function RegisterInputItem(props) {

    
  const [focus,setFocus] = useState(false)
  const [error,setError] = useState(false)
useEffect(()=>{
if(props.errorMessage){
  setError(true)
}else{
  setError(false)
}

},[props.errorMessage])




const errorTrue = " h-9 w-auto border-2 flex  justify-center rounded-lg focus-within:border-red-300  "

const errorFalse = " h-9 w-auto border-2 flex justify-center rounded-lg focus-within:border-indigo-400  "







console.log(props.errorMessage)

  const errorMessage = props.errorMessage;
    return (
      <>

        <div
        onBlur={() => {
          setFocus(false);
        }}
          onFocusCapture={() => {
            setFocus(true)
          }}
            
          className={error?errorTrue:errorFalse }
            
        >
          <FontAwesomeIcon
            className=" my-2  pl-2 items-center"
            icon={props.icon}
            color={focus? "#8978D9" : "grey"}
          />
          <input
            value={props.value || ""}
            onChange={(e)=>props.setValue(e.currentTarget.value)  }
            className=" pl-2 w-[200px] bg-transparent focus:outline-none  focus-within:placeholder-indigo-400 "
            placeholder={props.placeholder}
            type={props.type}
          />
          
   
       
        </div>
           <span className=' text-red-500 text-xs 	 '>{errorMessage}</span>
          
           </>
    );
    
}

export default withFormsy(RegisterInputItem);