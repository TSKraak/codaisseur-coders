import Axios from "axios";
import { API_URL } from "../../config";

export function postsFetched(morePosts) {
  return {
    type: "ADD_POSTS",
    payload: morePosts,
  };
}

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  const state = getState();
  // console.log("getState", getState());

  dispatch(startLoading());

  // TODO
  // fetch next set of posts (use offset+limit),
  const res = await Axios.get(
    `${API_URL}/posts?offset=${state.feed.posts.length}&limit=5`
  );

  //   console.log("RESULT DATA FETCH", res);
  //  and define the variable `morePosts`
  const morePosts = res.data.rows;

  dispatch(postsFetched(morePosts));
}

export function addNewPost(title, content, tags, user, timeStamp) {
  // console.log(title, content, tags, user, timeStamp);
  return {
    type: "ADD_NEW_POST",
    payload: { title, content, tags, user, timeStamp },
  };
}
