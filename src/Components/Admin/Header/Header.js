import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../../../images/news-logo.png'

const Header = () => {
  return (
    <>
      <div id="header-admin">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            {/* <!-- LOGO --> */}
            <div class="col-md-2">
              {/* <Link to="/home">
                <img class="logo" src={logo} alt="Logo"/>
              </Link> */}
            </div>
            <div class="offset-md-9  col-md-1">
              <a href="logout.php" class="admin-logout">
                logout
              </a>
            </div>
            {/* <!-- /LOGO-Out --> */}
          </div>
        </div>
      </div>

        <div id="admin-menubar">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ul className="admin-menu">
                  <li>
                    <Link to="/post">Post</Link>
                  </li>
                  <li>
                    <Link to="/category">Category</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
