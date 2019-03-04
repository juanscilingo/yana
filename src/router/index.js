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
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default function() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
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
