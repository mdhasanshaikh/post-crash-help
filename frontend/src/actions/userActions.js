import axios from "axios";

import {
  GET_USERS,
  FETCH_USERS_ERROR,
  USERS_LOADING,
} from "./types";

export const getUsers = (socket) => (dispatch) => {
  dispatch(setUsersLoading());

  axios
    .get("api/users")
    .then((res) => dispatch({ type: GET_USERS, payload: res.data.users }))
    .catch((err) => dispatch({ type: FETCH_USERS_ERROR, payload: err }));
};

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING,
  };
};

