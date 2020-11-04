import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
import postReducer from "./post/reducer";

const reducer = combineReducers({
  feed: feedReducer,
  post: postReducer,
  // etc.
});

export default reducer;
