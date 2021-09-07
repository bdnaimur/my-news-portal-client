import React from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users/Users";
import Category from "./Category/Category";
import Post from "./Post/Post";
import Footer from "./Footer/Footer";
import AddPost from "./Post/AddPost";
import CategoryAdd from "./Category/CategoryAdd";
import Categoryupdate from "./Category/Categoryupdate";
import AddUsers from "./Users/AddUsers";

const Admin = () => {
  return (
    <div>
  
      <Router>
      <Header />
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addPost">
            <AddPost/>
          </Route>
          <Route path="/addCategory">
            <CategoryAdd/>
          </Route>
          {/* <Route path="/updateCategory">
            <Categoryupdate/>
          </Route> */}
          <Route path="/addUser">
            <AddUsers/>
          </Route>
          <Route path="/">
            <Post />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
};

export default Admin;
