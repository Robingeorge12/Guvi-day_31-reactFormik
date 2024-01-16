import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid  navbar-container">

      <div className="navbar-icon">
        <Link to="/">
            <img className="rounded navbar-logo" src="https://images.pexels.com/photos/4132326/pexels-photo-4132326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </Link>
      </div>

      <div className="navbar-content ">
        <Link to="/" className="navbar-author-form ">
          <h5 className="navbar_link">AUTHOR FORM</h5>
        </Link>
        <Link to="/author" className="navbar-displayAuthor ">
          <h5 className="navbar_link">AUTHORS</h5>
        </Link>
        <Link to="/bookform" className="navbar-book-form">
          <h5 className="navbar_link">BOOK FORM</h5>
        </Link>
   
        <Link to="/book" className="navbar-displayBook ">
          <h5 className="navbar_link">BOOKS</h5>
        </Link>
      </div>

<div className="navbar-menu"></div>

    </div>
  );
}

export default Navbar;
