import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import Footer from "../Admin/Footer/Footer";
import Business from "./Business/Business";
import Entertainment from "./Entertainment/Entertainment";
import HeaderClient from "./Header/HeaderClient";
import Home from "./Home/Home";
import International from "./International/International";
import National from "./National/National";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Sports from "./Sports/Sports";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

import SuperAdmin from "./SuperAdmin/SuperAdmin";
import AdminLogin from "./AdminLogin/AdminLogin";
export const userContext = createContext();

const Client = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <>
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <HeaderClient />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <PrivateRoute path="/international">
          <International />
        </PrivateRoute>
        <Route path="/national">
          <National />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/adminLogin">
          <AdminLogin />
        </Route>
        <Route path="/entertainment">
          <Entertainment />
        </Route>
        <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </userContext.Provider>
    </>
  );
};

export default Client;
