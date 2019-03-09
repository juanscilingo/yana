import { createReducer } from "redux-starter-kit";

const initialState = {
  isAuthenticated: false,
  email: null,
  name: null,
  avatar: null
};

const authReducer = createReducer(initialState, {
  SIGNIN_SUCCESS: (state, action) => ({
    isAuthenticated: true,
    ...action.payload
  }),
  SIGNOUT_SUCCESS: (state, action) => initialState,
  REHIDRATE_AUTH: (state, action) => action.payload
});

export default authReducer;
