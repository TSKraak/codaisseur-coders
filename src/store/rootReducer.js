import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import feedReducer from "./feed/reducer";
import postReducer from "./post/reducer";

const reducer = combineReducers({
  feed: feedReducer,
  post: postReducer,
  auth: authReducer,
  // etc.
});

export default reducer;
