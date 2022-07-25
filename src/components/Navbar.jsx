import React  from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import { useSelector} from "react-redux";
import Logout from "./Logout";
import ShowAllComments from "./helpComponents/ShowAllComments";


function Navbar(props) {

  //CHECKING USERNAME IN REDUX
  const isUser = useSelector((state) => {
    return state.custom.USER_TOKEN_VALUE.username
  });
  //IF USER EXIST INSIDE THE REDUX THEN SHOW LOGOUT ELSE LOGIN
const isLogin = isUser ? (
    <Logout />
  ) : (
    <li>
      <Link to="/login" className="ml-1 lg:ml-8 md:ml-6 sm:ml-4">
        Login
      </Link>
    </li>
  );
  const isRegister = isUser ? (
    false
  ) : (
    <li>
      <Link to="/register" className=" ml-1 lg:ml-8 md:ml-6 sm:ml-4">
        Register
      </Link>
    </li>
  );

  return (
    <Router>
      <>
        <div className=" w-100% text-white bg-blue-400 h-8 justify-around flex">
          <span>LOgo</span>

          <ul className="flex ">
            <li>
              <Link to="/" className=" ml-1 lg:ml-8 md:ml-6 sm:ml-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="ml-1 lg:ml-8 md:ml-6 sm:ml-4">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="ml-1 lg:ml-8 md:ml-6 sm:ml-4">
                Blogs
              </Link>
            </li>
          </ul>

          <span>
            <ul className="flex">
              {isLogin}
              <br />
              {isRegister}
            </ul>
          </span>
        </div>
      
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route  path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Home/>}></Route>
          <Route  path="/register" element={<Register />}></Route>
          <Route path="/comments/:commentId" element={<ShowAllComments />}></Route>

          ShowAllComments
        </Routes>
      </>
    </Router>
  );
}

export default Navbar;
