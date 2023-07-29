import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

const Navabar = () => {
    const onClick = (e) =>{
        const itemContainer = document.querySelector(".item-container");
        itemContainer.classList.toggle("show");
    };
  return (
    <>
        <header>
      <div className="header-wrapper">
        <div className="logo">
          <img src="../images/mtclogo1.png" alt="" />
        </div>

        <div className="hamburger-icon" onClick={onClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="item-container">
          <Link className="nav-link nav-line" to="/"
            >home</Link>
          <Link className="nav-link nav-line" to="/">team</Link>
          <Link className="nav-link nav-line" to="/">gallery</Link>
          <Link className="nav-link nav-line" to="/">get in touch</Link>
          <button className="login-button">login</button>
        </div>
      </div>
    </header>

    </>
  );
}

export default Navabar;