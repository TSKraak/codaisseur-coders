import Axios from "axios";

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
  console.log("getState", getState());

  dispatch(startLoading());
  const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

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
