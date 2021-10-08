import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
function isLoggedIn() {
  const auth = getAuth();
  if (auth.currentUser) {
    return true
  } else {
    return false
  }
}

export default PrivateRoute;