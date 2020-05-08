import axios from "axios";

import {
  GET_AMBULANCES,
  FETCH_AMBULANCES_ERROR,
  AMBULANCES_LOADING,
  UPDATE_AMBULANCE,
  UPDATE_AMBULANCE_ERROR,
} from "./types";

export const getAmbulances = (socket) => (dispatch) => {
  dispatch(setAmbulancesLoading());
  axios
    .get("api/ambulances")
    .then((res) =>
      dispatch({ type: GET_AMBULANCES, payload: res.data.ambulances })
    )
    .catch((err) => dispatch({ type: FETCH_AMBULANCES_ERROR, payload: err }));
};

export const updateAmbulance = (id) => (dispatch) => {
  dispatch(setAmbulancesLoading());
  axios
    .put(`api/ambulances/${id}`)
    .then((res) => dispatch({ type: UPDATE_AMBULANCE, payload: id }))
    .catch((err) => dispatch({ type: UPDATE_AMBULANCE_ERROR, payload: err }));
};

export const setAmbulancesLoading = () => {
  return {
    type: AMBULANCES_LOADING,
  };
};
