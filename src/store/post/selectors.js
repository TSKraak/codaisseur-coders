export const selectPostLoading = (state) => {
  return state.post.loading;
};

export const selectPostAndComments = (state) => {
  return state.post.loading
    ? null
    : {
        post: state.post.post,
        comments: state.post.comments,
      };
};
