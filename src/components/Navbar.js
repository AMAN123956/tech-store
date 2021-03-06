import React from "react";
import {Link}  from "react-router-dom";
import logo from "../logo.svg";
function Navbar() {
    return(
       <nav className="navbar navbar-expand-sm navbar-dark  px-sm-5">
      
       <Link to="/">
           <img src={logo} alt="store" className="navbar-brand"  />
       </Link>
       <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
               <Link to="/"  className="nav-link ">
                   Products
               </Link>
           </li>
       </ul>
       <Link to="/cart" className="ml-auto">
           <button className="cartButton">
           <i className="fa fa-cart-plus" aria-hidden="true"></i>
               my cart
           </button>
       </Link>

       </nav>
    );
}


export default Navbar;