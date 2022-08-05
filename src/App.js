import "./App.css";

import { postsData } from "./reduxToolkit/reducerTool";

import { useSelector, useDispatch } from "react-redux";
import Main from "./components/Main";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./reduxToolkit/storeTool";

import jwt from "jwt-decode";

function App() {
  const dispatch = useDispatch();

  //LOCAL STORAGE TOKEN
  let localStorageToken = localStorage.getItem("token");

  //CHECK IF USER IS NOT LOGOUT
  if (localStorageToken !== null) {
    const decodedToken = jwt(localStorageToken);

    //IF USER NOT LOGOUT THEN SEND ALL TOKEN VALUE TO REDUX STORE
    dispatch({ type: "USER_INFO_TOKEN", payload: decodedToken.userDetail[0] });

    //INITIAL ALL POSTS RENDER REDUX STORE
    dispatch(postsData());
  }

  return (
    <>
      <div className="App">
        <ConnectedRouter>
          <Main />
        </ConnectedRouter>
      </div>
    </>
  );
}

export default App;
