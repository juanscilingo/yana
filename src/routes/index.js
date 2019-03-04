import React, { Suspense, lazy } from "react";
import { Route, Switch, Router, Redirect } from "react-router";

const Home = lazy(() => import("../views/Home"));
const Profile = lazy(() => import("../views/Profile"));
const Login = lazy(() => import("../views/Login"));
const Register = lazy(() => import("../views/Register"));

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <Router>
      <Suspense>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            path="/profile"
            authenticated={true}
            component={Profile}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}
