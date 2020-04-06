import {
  GET_ACCIDENTS,
  UPDATE_ACCIDENT,
  UPDATE_ACCIDENT_ERROR,
  ACCIDENTS_LOADING,
} from "../actions/types";

const initialState = {
  accidents: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACCIDENTS:
      return {
        ...state,
        accidents: action.payload,
        loading: false,
      };

    case UPDATE_ACCIDENT:
      let accidents = state.accidents.map((accident) => {
        if (accident._id === action.payload) {
          accident.serve = true;
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
