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

export const updateAccident = (id, ambulanceId) => (dispatch) => {
  dispatch(setAccidentLoading());
  axios
    .put(`api/accidents/${id}`, { ambulance_id: ambulanceId })
    .then((res) =>
      dispatch({ type: UPDATE_ACCIDENT, payload: { id, ambulanceId } })
    )
    .catch((err) => dispatch({ type: UPDATE_ACCIDENT_ERROR, payload: err }));
};

export const setAccidentLoading = () => {
  return {
    type: ACCIDENTS_LOADING,
  };
};
