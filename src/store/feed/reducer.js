const initialState = {
  loading: false,
  posts: [],
};

export default function feedReducer(state = initialState, action) {
  // console.log("FEED PAYLOAD", action.payload);

  switch (action.type) {
    case "ADD_POSTS":
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };

    case "START_LOADING":
      return { ...state, loading: true };

    case "ADD_NEW_POST":
      const { title, content, tags, user, timeStamp } = action.payload;
      const tagsArray = tags.map((tag, i) => {
        return { id: i + 1, tag: tag };
      });

      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Math.floor(Math.random() * 100 + 1),
            title,
            content,
            tags: tagsArray,
            author_id: user.id,
            createdAt: timeStamp,
          },
        ],
      };

    default:
      return state;
  }
}
