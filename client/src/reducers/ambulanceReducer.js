import { GET_AMBULANCES, AMBULANCES_LOADING } from "../actions/types";

const initialState = {
  ambulances: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AMBULANCES:
      return {
        ...state,
        ambulances: action.payload,
        loading: false
      };
      
    case AMBULANCES_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
