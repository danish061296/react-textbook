import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingCart";


function Header() {
    return (
        <nav className="header">

            {/* logo */}
            <Link to="/login">
            <img className="header__logo"  src='https://www.graphicsprings.com/filestorage/stencils/2f982715a3f3b7aa47b134b1a39e61c0.png?width=500&height=500' alt="" />
            </Link>


             {/* Search Bar*/}
             <div className="header_search">
             <input type="text" className ="header_search"/>
             <SearchIcon className="header_searchIcon"/>
             </div>
             
            <div className="header__nav">

            {/* Links */}
            <Link to= "/login" className="header__links">
            <div className="header__options">
             <span> Sign Up </span>
             </div>
            </Link>
            
            <Link to= "/login" className="header__links">
            <div className="header__options">
             <span> Sign In </span>
             </div>
            </Link>
           
            <Link to= "/login" className="header__links">
            <div className="header__options">
             <span> AboutUs</span>
             <span>& FAQ's </span>
             </div>
            </Link>

            {/* Cart*/}
            <Link to="/checkout" className="header__links"> 
            <ShoppingBasket />
            <span>0</span>
            
            </Link>
          
            </div>
        </nav>

    )
}

export default Header
 
