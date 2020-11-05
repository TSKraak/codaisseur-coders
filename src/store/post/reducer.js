const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postReducer(state = initialState, action) {
  console.log("POST PAYLOAD", action.payload);

  switch (action.type) {
    case "START_LOADING_POST_ID":
      return { ...state, loading: true };

    case "ADD_POST":
      return {
        ...state,
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };

    default:
      return state;
  }
}
