import {
  GET_USERS,
  USERS_LOADING,
  UPDATE_USER,
  UPDATE_USER_ERROR,
} from "../actions/types";

const initialState = {
  users: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case UPDATE_USER:
      let users = state.users;
      users.push(action.payload);
      return {
        ...state,
        users: users,
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
