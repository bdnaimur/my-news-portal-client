import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userContext } from "../Client";

const privateInternational = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(loggedInUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.adminLoggedin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/international",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default privateInternational;
