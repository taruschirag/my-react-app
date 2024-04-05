import "./NavbarStyles.css"

import { Link } from 'react-router-dom'; 
import {FaRegFileCode, FaTimes} from 'react-icons/fa';

import React, { useState } from "react";


const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className= "header">
        <Link to = "/">
            <h1>Chirag Jain</h1>
        </Link>
      <ul className= {click? "nav-menu" : "nav-menu active"}>
        <li>
            <Link to = "/"> Home </Link>
        </li>

        <li>
        <Link to = "/projects"> Projects </Link>
        </li>
        
        <li>
            <Link to = "/Work"> Work </Link>
        </li>
        
        <li>
            <Link to = "/contact"> Contact </Link>
        </li>
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click? ( <FaRegFileCode size = {20} style = {{color: "#fff"}}
        />) : ( <FaTimes size = {20} style = {{color: "#fff"}}
        />)}
       
        
      </div>
    </div>
  )
}

export default Navbar
