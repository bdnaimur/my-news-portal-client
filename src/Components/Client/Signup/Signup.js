import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { userContext } from '../../App';
import { useHistory, useLocation } from "react-router-dom";
// import firebaseConfig from '../Login1/firebase.config'
import { userContext } from "../Client";
import FireBaseLogin from "../AdminLogin/FireBaseLogin";
// import firebaseConfig from '../Login1/firebase.config';
// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }

const Signup = () => {
  const history = useHistory();
  const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(from);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // const history = useHistory();
  // const location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    name: "",
  });
  // const googleProvider = new firebase.auth.GoogleAuthProvider();
  // // const facebookProvider = new firebase.auth.FacebookAuthProvider();
  // const googleSignin = () => {
  //     firebase.auth().signInWithPopup(googleProvider)
  //         .then((result) => {
  //             const user = result.user;
  //             user.isSigned = true;
  //             setUser(user);
  //             setLoggedInUser(user);
  //             if (loggedInUser) {
  //                 history.replace(from);
  //             }
  //         }).catch((error) => {
  //             // const errorCode = error.code;
  //             const errorMessage = error.message;
  //             console.log(errorMessage);
  //         });
  // }

  const hanldeCreateSubmit = (e) => {
    e.preventDefault();
    if (loggedInUser && from) {
      history.replace(from);
  }
  else if(loggedInUser) {
      history.push('/admin');
  }
    e.target.reset();
  };

  // const updateUserName = name =>{
  //     const user = firebase.auth().currentUser;
  //     user.updateProfile({
  //     displayName: name
  //     }).then(function() {
  //     // Update successful.
  //     }).catch(function(error) {
  //     // An error happened.
  //     });
  //   }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const userSignInfo = { ...user };
      userSignInfo[e.target.name] = e.target.value;
      setUser(userSignInfo);
      setLoggedInUser({ ...loggedInUser, ...userSignInfo });
    }
  };
  console.log(loggedInUser);

  return (
    <div className="form-styling">
      {user.error && (
        <h6 style={{ color: "red", textAlign: "center" }}>{user.error}</h6>
      )}
      <div className="mt-3 offset-md-4 col-md-4 social-signin">
        <FireBaseLogin />
      </div>
      <div className="mt-3 offset-md-3 col-md-6">
        <h3 className="text-center">Create an account</h3>
        <form onSubmit={hanldeCreateSubmit} className="form-style">
          <div class="form-group">
            <label>Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              name="displayName"
              id=""
              class="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              onBlur={handleBlur}
              type="email"
              name="email"
              id="inputEmail4"
              class="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              onBlur={handleBlur}
              type="password"
              name="password"
              class="form-control"
              id=""
              placeholder="Password"
              required
            />
          </div>
          <div class="form-group">
            <label>Re Password</label>
            <input
              onBlur={handleBlur}
              type="password"
              name="repassword"
              id=""
              class="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>
          <br />
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </form>
      </div>
      <p className="text-center">
        <small>
          Already have an account?{" "}
          <Link to="/adminLogin">
            <span>
              <strong>Login</strong>
            </span>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Signup;
