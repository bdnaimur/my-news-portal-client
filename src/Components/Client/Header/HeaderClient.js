import React from 'react';
import logo from '../../../images/news-logo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeaderClient = () => {
    return (
        <>
            {/* <!-- HEADER --> */}
<div id="header">
    {/* <!-- container --> */}
    <div class="container">
        {/* <!-- row --> */}
        <div class="row">
            {/* <!-- LOGO --> */}
            <div class=" col-md-offset-4 col-md-4">
            <Link to="/home" id="logo"><img src={logo} alt="logo"/></Link>
            </div>
            {/* <!-- /LOGO --> */}
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
                    <Link to="/admin">Admin</Link>
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