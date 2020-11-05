export const selectUserName = (state) => {
  if (state.auth.me) {
    return state.auth.me.name;
  }
};

export const selectUser = (state) => state.auth.me;

export const selectToken = (state) => state.auth.accessToken;
