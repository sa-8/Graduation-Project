import { AUTH_CHANGED } from "../authActions";

const initialState = {
  authedUser: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHANGED:
      return {
        ...state,
        authedUser: action.payload,
      };
    default:
      return state;
  }
};
