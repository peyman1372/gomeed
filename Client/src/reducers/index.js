import { combineReducers } from "redux";
import { reducer } from "redux-form";
import authReducer from "./authReducer";
import CaptchaReducer from "./CaptchaReducer";
export default combineReducers({
  auth: authReducer,
  form: reducer,
  captcha: CaptchaReducer,
});
