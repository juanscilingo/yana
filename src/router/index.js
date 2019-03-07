import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Layout from "../views/Layout";

const Home = lazy(() => import("../views/Home"));
const Profile = lazy(() => import("../views/Profile"));
const Login = lazy(() => import("../views/Login"));
const Register = lazy(() => import("../views/Register"));
const NotFound = lazy(() => import("../views/NotFound"));

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default function() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PrivateRoute exact path="/" authenticated={true} component={Home} />
          <PrivateRoute
            path="/profile"
            authenticated={true}
            component={Profile}
          />
          <PublicRoute component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
