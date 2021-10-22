import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../Client';

const PrivateRouteInternational = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser);
      return (
          <Route
          {...rest}
          render={({ location }) =>
          loggedInUser.adminLoggedin || loggedInUser.emailVerified? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signup",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
  };
export default PrivateRouteInternational;
