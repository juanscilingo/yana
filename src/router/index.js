import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../views/Layout";

const Home = lazy(() => import("../views/Home"));
const Profile = lazy(() => import("../views/Profile"));
const Signin = lazy(() => import("../views/Signin"));
const Signup = lazy(() => import("../views/Signup"));
const NotFound = lazy(() => import("../views/NotFound"));

function PublicRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

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
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function GuestRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function AppRouter(props) {
  const { isAuthenticated } = props.auth;
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <GuestRoute
            authenticated={isAuthenticated}
            path="/signin"
            component={Signin}
          />
          <GuestRoute
            authenticated={isAuthenticated}
            path="/signup"
            component={Signup}
          />
          <PrivateRoute
            exact
            path="/"
            authenticated={isAuthenticated}
            component={Home}
          />
          <PrivateRoute
            path="/profile"
            authenticated={isAuthenticated}
            component={Profile}
          />
          <PublicRoute component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default connect(state => ({ auth: state.auth }))(AppRouter);
