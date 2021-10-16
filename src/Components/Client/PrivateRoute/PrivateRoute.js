import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../Client';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser);
      return (
          <Route
          {...rest}
          render={({ location }) =>
          loggedInUser.adminLoggedin || loggedInUser.userLoggedIn || loggedInUser.email? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/adminLogin",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
  };
export default PrivateRoute;