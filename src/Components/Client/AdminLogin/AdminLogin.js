import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../Client';
import FireBaseLogin from './FireBaseLogin';

const AdminLogin = () => {
  let history = useHistory();
  const [userData, setUserData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [adminLogin, setAdminLogin] = useState({
        normalUsername: "",
        normalUserPassword: "",
        adminUsername: "",
        adminPassword: "",
        adminLoggedin:false,
        userLoggedIn: false,
        userId: 0
    })
    const agentName = userData.filter(singleUserName => adminLogin.normalUsername===singleUserName.username);

    const agentPassword = userData.filter(singleUserName => adminLogin.normalUserPassword===singleUserName.password);

    useEffect(()=>{
      fetch(`https://frozen-temple-20129.herokuapp.com/users`) 
      .then(res => res.json())
      .then(data => setUserData(data));
    },[])
    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(agentName[0] && agentPassword[0] && agentName[0].role==="10"){
          const loggedInUserWithAdmin = {...loggedInUser,...adminLogin,userLoggedIn:true, userName:agentName[0].fName+ ' ' +agentName[0].lName, userLevel:10, userId:agentName[0].userId};
        setLoggedInUser({...loggedInUser,...loggedInUserWithAdmin});
        history.push('/admin');
        }
        else if(agentName[0] && agentPassword[0] && agentName[0].role==="15"){
          const loggedInUserWithAdmin = {...loggedInUser,...adminLogin,userLoggedIn:true, userName:agentName[0].fName+ ' ' +agentName[0].lName, userLevel:15, userId:agentName[0].userId};
        setLoggedInUser({...loggedInUser,...loggedInUserWithAdmin});
        history.push('/admin');
        }
        else if(adminLogin.adminUsername && adminLogin.adminPassdword){
            const loggedInUserWithAdmin = {...loggedInUser,...adminLogin,adminLoggedin:true, userName:"Super User", userLevel:5, userId:1}
        setLoggedInUser({...loggedInUser,...loggedInUserWithAdmin});
        history.push('/admin');        
        }
        else if(!adminLogin.userLoggedIn || !adminLogin.adminLoggedin){
          alert("Username or Password incorrect.")
        }
      //   let loggedInUserSession = JSON.stringify(loggedInUser)
      //  localStorage.setItem("loginData", 'loggedInUserSession')
        e.target.reset();
    }
    const handleuserName = e =>{
        if(e.target.value === "test@test.com"){
            const insertUsername = {...adminLogin, adminUsername:e.target.value};
            setAdminLogin(insertUsername);            
        }
        else {const insertNormalUsername = {...adminLogin, normalUsername:e.target.value}
        setAdminLogin(insertNormalUsername);}
    }
    const handlePassword = e =>{
        if(e.target.value === "#2021dev"){
        const insertPassword = {...adminLogin, adminPassdword:e.target.value};
        setAdminLogin(insertPassword);
        }
        else {const insertNormalPassword = {...adminLogin, normalUserPassword:e.target.value}
        setAdminLogin(insertNormalPassword)}
    }

  return (
    <div id="wrapper-admin" class="body-content">
      <div class="container">
        <div class="row">
          <div class="offset-md-4 col-md-4">
            {/* <img class="logo" src="images/news.jpg"> */}
            <h3 class="heading">Admin</h3>
            {/* <!-- Form Start --> */}
            <form onSubmit={handleLoginSubmit} className="mb-5">
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
                class="btn btn-primary w-100 mt-3"
                value="login"
              />
            </form>
            <FireBaseLogin/>
            {/* <!-- /Form  End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
