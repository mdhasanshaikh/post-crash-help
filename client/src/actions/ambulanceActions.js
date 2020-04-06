import axios from "axios";
import {
  GET_AMBULANCES,
  AMBULANCES_LOADING,
  UPDATE_AMBULANCE,
  UPDATE_AMBULANCE_ERROR,
} from "./types";

export const getAmbulances = () => (dispatch) => {
  dispatch(setAmbulancesLoading());
  axios
    .get("api/ambulances")
    .then((res) => dispatch({ type: GET_AMBULANCES, payload: res.data }));
};

export const updateAmbulance = (id) => (dispatch) => {
  console.log(id);
  dispatch(setAmbulancesLoading());
  axios
    .get(`api/ambulances/${id}`)
    .then((res) => dispatch({ type: UPDATE_AMBULANCE, payload: id }))
    .catch((err) => dispatch({ type: UPDATE_AMBULANCE_ERROR, payload: err }));
};

export const setAmbulancesLoading = () => {
  return {
    type: AMBULANCES_LOADING,
  };
};
