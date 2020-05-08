import { combineReducers } from "redux";
import accidentReducer from "./accidentReducer";
import userReducer from "./userReducer";
import ambulanceReducer from "./ambulanceReducer";

export default combineReducers({
  accident: accidentReducer,
  user: userReducer,
  ambulance: ambulanceReducer
});
