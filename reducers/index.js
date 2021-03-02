import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import workout from "./workout";

export default combineReducers({
  auth,
  profile,
  workout
});
