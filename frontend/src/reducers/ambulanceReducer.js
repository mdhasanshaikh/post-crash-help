import {
  GET_AMBULANCES,
  AMBULANCES_LOADING,
  UPDATE_AMBULANCE,
  UPDATE_AMBULANCE_ERROR,
} from "../actions/types";

const initialState = {
  ambulances: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AMBULANCES:
      return {
        ...state,
        ambulances: action.payload,
        loading: false,
      };

    case UPDATE_AMBULANCE:
      let ambulances = state.ambulances.map((ambulance) => {
        if (ambulance._id === action.payload) {
          ambulance.availability = false;
        }
        return ambulance;
      });
      return {
        ...state,
        ambulances: ambulances,
      };

    case UPDATE_AMBULANCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case AMBULANCES_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
