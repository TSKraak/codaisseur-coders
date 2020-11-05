// src/store/auth/actions.js
import Axios from "axios";
import { API_URL } from "../../config";

export const userLoggedIn = (profile, jwt) => {
  //   console.log("userLoggedIn", profile, jwt);

  return { type: "USER_LOGIN", payload: { profile, jwt } };
};

const getUserProfile = async (token) => {
  try {
    const userRes = await Axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return userRes.data;
  } catch (error) {
    console.log("ERROR:", error);
  }
};

export const login = (email, password) => async (dispatch, getState) => {
  //   console.log(email, password);
  try {
    const tokenRes = await Axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const { jwt } = tokenRes.data;
    // console.log("TOKEN:", jwt);

    // const userRes = await Axios.get(`${API_URL}/me`, {
    //   headers: {
    //     Authorization: `Bearer ${jwt}`,
    //   },
    // });

    // // console.log("userRes", userRes);
    // const profile = userRes.data;

    const profile = await getUserProfile(jwt);
    // console.log("PROFILE", profile);
    localStorage.setItem("token", jwt);

    dispatch(userLoggedIn(profile, jwt));
  } catch (error) {
    console.log("ERROR:", error);
  }
};

export const bootstrapLoginState = () => async (dispatch, getState) => {
  //   console.log("localStorage", localStorage);
  if (localStorage.token) {
    const token = localStorage.token;
    const profile = await getUserProfile(token);
    dispatch(userLoggedIn(profile, token));
  }
};

export const logout = (dispatch, getState) => {
  dispatch({ type: "USER_LOGOUT" });
  localStorage.removeItem("token");
};
