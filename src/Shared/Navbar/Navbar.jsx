import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";


const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/about">Features</Link>
      </li>
      <li>
        <Link to="/services">Research</Link>
      </li>
      <li tabIndex="0">
        <details>
          <summary>About</summary>
          <ul className="p-2 text-black">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/blog">Positions</Link>
      </li>
     
    </>
  );


  return (
    <>
     

      <div className="navbar bg-white text-white p-5">
        {/* Mobile */}
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="logo flex font-semibold">
          
            <img src={Logo} alt="Logo" className="logo-image" />Detox.
          
        </div>

        {/* Desktop */}
        <div className="hidden ml-28 px-16 lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* CTA */}
        <div className="contact hidden ml-auto  lg:flex">
          <a className="btn bg-orange-600 text-white">Contact
         </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
