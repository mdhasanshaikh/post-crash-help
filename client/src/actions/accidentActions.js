import axios from "axios";
import {
  GET_ACCIDENTS,
  UPDATE_ACCIDENT,
  UPDATE_ACCIDENT_ERROR,
  ACCIDENTS_LOADING,
} from "../actions/types";

export const getAccidents = () => (dispatch) => {
  dispatch(setAccidentLoading());
  axios
    .get("api/accidents")
    .then((res) => dispatch({ type: GET_ACCIDENTS, payload: res.data }));
};

export const updateAccident = (id) => (dispatch) => {
  
  dispatch(setAccidentLoading());
  axios
    .put(`api/accidents/${id}`)
    .then((res) => dispatch({ type: UPDATE_ACCIDENT, payload: id }))
    .catch((err) => dispatch({ type: UPDATE_ACCIDENT_ERROR, payload: err }));
};

export const setAccidentLoading = () => {
  return {
    type: ACCIDENTS_LOADING,
  };
};
