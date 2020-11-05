const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function authReducer(state = initialState, action) {
  //   console.log("AUTH PAYLOAD", action.type);

  switch (action.type) {
    case "USER_LOGIN":
      //   console.log("HELLO");
      return {
        me: action.payload.profile,
        accessToken: action.payload.jwt,
      };
    case "USER_LOGOUT":
      return {
        me: null,
        accessToken: null,
      };

    default:
      return state;
  }
}
