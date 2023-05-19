import React from 'react';
import "./navbar.css";
import {GitHamburgerMenu} from "react-icons/gi"


const navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img  className="rc" src="https://media.licdn.com/dms/image/C4E0BAQGZflNMlHd0LQ/company-logo_200_200/0/1627225447246?e=2147483647&v=beta&t=_wtNjuxQHBicWhkaoNhEXaL2pFXJ2xk3D2aL0D9lChQ"/>
          <h2>
            <span className="name">ReadyCoder</span>
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>


          </ul>
          

        </div>

       
      </nav>
    </>
  )
}

export default navbar