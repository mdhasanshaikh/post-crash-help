import {
  GET_ACCIDENTS,
  UPDATE_ACCIDENT,
  UPDATE_ACCIDENT_ERROR,
  ACCIDENTS_LOADING,
  LISTENED_ACCIDENT_UPDATE,
  LISTEN_ACCIDENT_UPDATE_ERROR,
} from "../actions/types";

const initialState = {
  accidents: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  let accidents = state.accidents;
  switch (action.type) {
    case GET_ACCIDENTS:
      return {
        ...state,
        accidents: action.payload,
        loading: false,
      };

    case LISTENED_ACCIDENT_UPDATE:
      accidents.push(action.payload);
      return {
        ...state,
        accidents: accidents,
      };

    case LISTEN_ACCIDENT_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case UPDATE_ACCIDENT:
      accidents = state.accidents.map((accident) => {
        if (accident._id === action.payload.id) {
          accident.serve = true;
          accident.ambulance_id = action.payload.ambulanceId;
        }
        return accident;
      });
      return {
        ...state,
        accidents: accidents,
      };

    case UPDATE_ACCIDENT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case ACCIDENTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
