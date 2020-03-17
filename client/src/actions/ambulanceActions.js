import axios from "axios";
import { GET_AMBULANCES, AMBULANCES_LOADING } from "./types";

export const getAmbulances = () => dispatch => {
  dispatch(setAmbulancesLoading());
  axios
    .get("api/ambulances")
    .then(res => dispatch({ type: GET_AMBULANCES, payload: res.data }));
};

export const setAmbulancesLoading = () => {
  return {
    type: AMBULANCES_LOADING
  };
};
