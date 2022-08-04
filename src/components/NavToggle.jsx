import React from 'react';
import { Link } from 'react-router-dom';
function NavToggle(props) {
    return (
        <div  className='h-screen bg-red-200'>
                       

            <nav className='max-w-4xl mx-[170px]  flex h-[130px] ' >
            <ul className='flex flex-col  justify-evenly   items-start '>
                <li>
                <Link to="/" className="   text-gray-600 font-semibold    ">
                Home
              </Link>
                </li>
                <li>
                <Link to="/about" className="text-gray-600 font-semibold">
                About
              </Link>
                </li>
                <li>
             
                <Link to="/blogs" className="text-gray-600 font-semibold">
                Blogs
              </Link>
                </li>
               
  
             




            </ul>



                
            </nav>





        </div>
    );
}

export default NavToggle;