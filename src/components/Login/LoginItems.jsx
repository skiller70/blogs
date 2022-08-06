import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withFormsy } from "formsy-react";
function LoginItems(props) {
  const [focus, setFocus] = useState(false);
  
  return (
    <div
      onBlur={() => {
        setFocus(false);
      }}
      onFocusCapture={() => {
        setFocus(true);
      }}
      className=" flex justify-center gap-1"
    >
      <FontAwesomeIcon
        className="w-8 h-6  my-1  items-center"
        color={focus ? "#4496d0" : "grey"}
        icon={props.icon}
      />

      <input
        value={props.value || ""}
        onChange={(e) => props.setValue(e.currentTarget.value)}
        className="  bg-transparent text-gray-700 outline-none w-[240px] h-9 pb-1  "
        type={props.type}
      />
    </div>
  );
}

export default withFormsy(LoginItems);
