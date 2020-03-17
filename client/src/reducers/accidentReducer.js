import {
  GET_ACCIDENTS,
  UPDATE_ACCIDENT,
  ACCIDENTS_LOADING
} from "../actions/types";

const initialState = {
  accidents: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACCIDENTS:
      return {
        ...state,
        accidents: action.payload,
        loading: false
      };

    case UPDATE_ACCIDENT:
      return {
        ...state,
        accidents: state.accidents.filter(
          accident => accident._id !== action.payload
        )
      };

    case ACCIDENTS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
