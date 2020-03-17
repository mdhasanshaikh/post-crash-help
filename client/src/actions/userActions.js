import axios from "axios";
import { GET_USERS, USERS_LOADING } from "./types";

export const getUsers = () => dispatch => {
  dispatch(setUsersLoading());
  axios
    .get("api/users")
    .then(res => dispatch({ type: GET_USERS, payload: res.data }));
};

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};
