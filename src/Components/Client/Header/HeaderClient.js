import React from 'react';
import logo from '../../../images/news-logo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaFacebookSquare } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io';
const HeaderClient = () => {
const handleClick = e =>{
  alert("Email: test@test.com , Password: #2021dev")
}

  return (
    <>
      {/* <!-- HEADER --> */}
      <div id="header">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            {/* <!-- LOGO --> */}
            <div className="d-flex">
              <div class="col-md-2">
                <Link to="/home" id="logo"><img width="50px" height="40px" src={logo} alt="logo" /></Link>
              </div>
              {/* <!-- /LOGO --> */}
              <div className="offset-8 col-md-2">
                <nav className="">
                  <a href="https://www.facebook.com/naimu/" target="_blank" className="m-3 text-white"><FaFacebookSquare className="text-1xl" /></a>
                  <a href="#" target="_blank" className="m-3 text-white"><FiTwitter className="text-1xl" /></a>
                  <a href="#" target="_blank" className="m-3 text-white"><FiMail className="text-1xl" /></a>
                  <a href="https://www.linkedin.com/in/rahman-88/" target="_blank" className="m-3 text-white"><IoLogoLinkedin className="text-1xl" /></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /HEADER --> */}
      {/* <!-- Menu Bar --> */}
      <div id="menu-bar">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class='menu'>
                <li>
                  <Link to="/business">Business</Link>
                </li>
                <li>
                  <Link to="/entertainment">Entertainment</Link>
                </li>
                <li>
                  <Link to="/sports">Sports</Link>
                </li>
                <li>
                  <Link to="/international">International</Link>
                </li>
                <li>
                  <Link to="/national">National</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/admin" title="Email: test@test.com , Password: #2021dev ">Admin</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderClient;