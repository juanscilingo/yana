import { combineReducers } from "redux";
import auth from "./auth";
import notebooks from "./notebooks";

export default combineReducers({
  auth,
  notebooks
});
