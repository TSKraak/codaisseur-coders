// src/store/postPage/actions.js
import axios from "axios";
import { API_URL } from "../../config";

export function startLoadingPost() {
  return {
    type: "START_LOADING_POST_ID",
  };
}

export function postFullyFetched(post, comments) {
  return {
    type: "ADD_POST",
    payload: post,
    comments,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    console.log("RESULT POST FETCH", postResponse);
    console.log("RESULT COMMENTS FETCH", commentsResponse);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
