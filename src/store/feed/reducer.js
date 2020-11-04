const initialState = {
  loading: false,
  posts: [],
};

export default function feedReducer(state = initialState, action) {
  console.log("PAYLOAD", action.payload);

  switch (action.type) {
    case "ADD_POSTS":
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };

    case "START_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
}
