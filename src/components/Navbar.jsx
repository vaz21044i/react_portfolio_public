import React from 'react'
import { Route,Routes,Link,NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

import Home from '../pages/Home';

const Navbar = ({ isActive }) => {
  return (
    
<>
<nav>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Julius Varadi</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <CiMenuBurger/>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
        <li>
        <NavLink to="/" className={`block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? 'active' : ''}`}>Home</NavLink>
        </li>
        
        
        
        
        
       
      </ul>
    </div>
  </div>
</nav>
<div className='cotnainer'>
    <Routes>
            <Route path='/' element={<Home/>}/>
          
           
    </Routes>
  </div>
</>
  )
}

export default Navbar