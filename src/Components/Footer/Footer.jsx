import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>
       <footer>
      <div className="row">
        <div className="col">
          <img src="logo_dark.png" alt="" className="logo" />
            <p>Technology is making people's lives easier.
                We, here at MTC are, constantly Innovating, Inventing and Improvising.</p>
        </div>
      
      

         
          <div className="col">
            <h3>CONTACT US <div className="underline"><span></span></div></h3>
            <p>UPES Bidholi,</p>
            <p>Dehradun 248007</p>
            <p>Uttarakhand</p>
            <p>Phone: +91-99108 10462</p>
           <p className="emailid"> Email: upesmtc@gmail.com</p>
          </div>
          <div className="col">
              <h3>LINKS<div className="underline"><span></span></div></h3>

              <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="">About us</Link></li>
                <li><Link to="">Contact</Link></li>
                <li><Link to="">Team</Link></li>
            </ul>
          </div>
          <div className="col">
            <h3>SOCIALS <div className="underline"><span></span></div></h3>
          
          <div className="social-links">
          <p className="no"> <Link to="https://www.facebook.com/upesmtc/?epa=SEARCH_BOX"><i className="fa-brands fa-facebook"></i></Link> </p>
           <p className="no"> <Link to="https://www.instagram.com/upesmtc/"><i className="fa-brands fa-instagram"/></Link>  </p>
            <p className="no"> <Link to="https://www.linkedin.com/company/upesmtc/"><i className="fa-brands fa-linkedin-in"/></Link>   </p>
                    </div>
          </div>          
      </div>
        
      <hr/>
      <p className="copy">COPYRIGHT © MICROSOFT TECHNICAL COMMUNITY. ALL RIGHTS RESERVED    </p>
      <hr/>
    </footer>
    </>
  )
}

export default Footer