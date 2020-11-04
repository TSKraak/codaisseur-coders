export const selectFeedPosts = (state) => {
  return state.feed.posts;
};

export const selectFeedLoading = (state) => {
  return state.feed.loading;
};
