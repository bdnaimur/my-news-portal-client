import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./Category/Category";
import CategoryAdd from "./Category/CategoryAdd";
import Categoryupdate from "./Category/Categoryupdate";
import Header from "./Header/Header";
import AddPost from "./Post/AddPost";
import Post from "./Post/Post";
import AddUsers from "./Users/AddUsers";
import Users from "./Users/Users";

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
          <Route path="/updateCategory/:categoryId">
            <Categoryupdate/>
          </Route>
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
