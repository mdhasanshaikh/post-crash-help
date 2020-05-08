import axios from "axios";

import {
  GET_USERS,
  FETCH_USERS_ERROR,
  USERS_LOADING,
  UPDATE_USER,
  UPDATE_USER_ERROR,
} from "./types";

export const getUsers = (socket) => (dispatch) => {
  dispatch(setUsersLoading());

  axios
    .get("api/users")
    .then((res) => dispatch({ type: GET_USERS, payload: res.data.users }))
    .catch((err) => dispatch({ type: FETCH_USERS_ERROR, payload: err }));

  // Socket io code
  // socket.on("getUsers", (data) => {
  //   if (data.success) {
  //     dispatch({ type: GET_USERS, payload: data.users });
  //   } else {
  //     dispatch({ type: FETCH_USERS_ERROR, payload: data.error });
  //   }
  // });
};

export const listenToUserCollectionUpdate = (res) => (dispatch) => {
  dispatch(setUsersLoading());

  console.log("We are in update users...");
  if (res.success) {
    dispatch({ type: UPDATE_USER, payload: res.users });
  } else {
    dispatch({ type: UPDATE_USER_ERROR, payload: "Some went wrong.." });
  }
};

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING,
  };
};
