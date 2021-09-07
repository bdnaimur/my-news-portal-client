import React, { useContext, useState } from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../Client';

const AdminLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [adminLogin, setAdminLogin] = useState({
        adminUsername: "",
        adminPassword: "",
        adminLoggedin:false
    })
    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(adminLogin.adminUsername && adminLogin.adminPassdword){
            const loggedInUserWithAdmin = {...loggedInUser,...adminLogin,adminLoggedin:true}
        setLoggedInUser(loggedInUserWithAdmin);
        alert("Welcome to Admin panel. Please click Admin once more")
        }
       
        e.target.reset();
    }
    const handleuserName = e =>{
        if(e.target.value === "test@test.com"){
            const insertUsername = {...adminLogin, adminUsername:e.target.value};
            setAdminLogin(insertUsername);
        }
       
    }
    const handlePassword = e =>{
        if(e.target.value === "#2021dev"){
        const insertPassword = {...adminLogin, adminPassdword:e.target.value};
        setAdminLogin(insertPassword);
        }
    }
    console.log(loggedInUser);
  return (
    <div id="wrapper-admin" class="body-content">
      <div class="container">
        <div class="row">
          <div class="offset-md-4 col-md-4">
            {/* <img class="logo" src="images/news.jpg"> */}
            <h3 class="heading">Admin</h3>
            {/* <!-- Form Start --> */}
            <form onSubmit={handleLoginSubmit}>
              <div class="form-group">
                <label>Username</label>
                <input
                onBlur = {handleuserName}
                  type="text"
                  name="username"
                  class="form-control"
                  placeholder="email or Username"
                  required
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                 onBlur = {handlePassword}
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <input
                type="submit"
                name="login"
                class="btn btn-primary"
                value="login"
              />
            </form>
            {/* <!-- /Form  End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
