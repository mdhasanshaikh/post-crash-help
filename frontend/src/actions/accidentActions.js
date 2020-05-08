import axios from "axios";

import {
  GET_ACCIDENTS,
  FETCH_ACCIDENTS_ERROR,
  UPDATE_ACCIDENT,
  UPDATE_ACCIDENT_ERROR,
  ACCIDENTS_LOADING,
  LISTENING_ACCIDENT_UPDATE,
  LISTENED_ACCIDENT_UPDATE,
  LISTEN_ACCIDENT_UPDATE_ERROR,
} from "../actions/types";

export const getAccidents = () => (dispatch) => {
  dispatch(setAccidentLoading());
  axios
    .get("api/accidents")
    .then((res) =>
      dispatch({ type: GET_ACCIDENTS, payload: res.data.accidents })
    )
    .catch((err) => dispatch({ type: FETCH_ACCIDENTS_ERROR, payload: err }));
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

export const listenToAccidentCollectionUpdate = (res) => (dispatch) => {
  dispatch(setAccidentUpdateListening());

  console.log("update the store with new value");
  if (res.success) {
    dispatch({ type: LISTENED_ACCIDENT_UPDATE, payload: res.accident });
  } else {
    dispatch({
      type: LISTEN_ACCIDENT_UPDATE_ERROR,
      payload: "Some went wrong..",
    });
  }
};

export const setAccidentLoading = () => {
  return {
    type: ACCIDENTS_LOADING,
  };
};

export const setAccidentUpdateListening = () => {
  return {
    type: LISTENING_ACCIDENT_UPDATE,
  };
};
