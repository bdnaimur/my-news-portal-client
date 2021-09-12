import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Client/Client";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const hendleLogout = e =>{
    setLoggedInUser({});
  }
  return (
    <>
      <div id="header-admin">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            {/* <!-- LOGO --> */}
            <div class="col-md-2">
              <Link to="/post">
                <span style={{color:"white", fontSize:"25px"}}>{loggedInUser.userName}</span>
              </Link>
            </div>
            <div class="offset-md-9  col-md-1">
              <a onClick={hendleLogout} class="admin-logout">
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
