import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function ProtectedRoutes({ component: Component, ...rest }) {
  console.log(rest);
  const { isAuth } = useSelector((state) => state.authReducer);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
}

export default ProtectedRoutes;
