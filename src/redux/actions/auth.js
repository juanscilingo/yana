import { createAction } from "redux-starter-kit";
import authApi from "../../api/auth";

export const signinSuccess = createAction("SIGNIN_SUCCESS");
export const signin = credentials => dispatch =>
  authApi.signin(credentials).then(user => dispatch(signinSuccess(user)));

export const rehidrateAuth = createAction("REHIDRATE_AUTH");

export const signoutSuccess = createAction("SIGNOUT_SUCCESS");
export const signout = () => dispatch =>
  authApi.signout().then(() => dispatch(signoutSuccess()));

export const signupSuccess = createAction("SIGNUP_SUCCESS");
export const signup = data => dispatch =>
  authApi.signup(data).then(user => dispatch(signupSuccess(user)));
