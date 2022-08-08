import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function NavToggle(props) {
  const dispatch = useDispatch();
    return (
        <div  className='h-screen   md:hidden bg-[#e2e8f0]'>
                       

            <nav className='max-w-4xl mx-[100px] z-50 absolute flex h-[130px] ' >
            <ul className='flex flex-col  justify-evenly   items-start '>
                <li>
                <Link onClick={()=>{dispatch({type:"CHANGE_ROUTE"})}} to="/" className="   text-gray-600 font-semibold    ">
                Home
              </Link>
                </li>
                <li>
                <Link onClick={()=>{dispatch({type:"CHANGE_ROUTE"})}} to="/about" className="text-gray-600 font-semibold">
                About
              </Link>
                </li>
                <li>
             
                <Link  onClick={()=>{dispatch({type:"CHANGE_ROUTE"})}} to="/blogs" className="text-gray-600 font-semibold">
                Blogs
              </Link>
                </li>
               
  
             




            </ul>



                
            </nav>





        </div>
    );
}

export default NavToggle;