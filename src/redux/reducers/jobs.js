import { GET_JOBS, TOGGLE_ERROR, TOGGLE_SPINNER } from "../actions";

const initialState = {
  jobs: [],
  isLoading: true,
  isError: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case TOGGLE_ERROR:
      return {
        ...state,
        isError: !state.isError,
      };
    default:
      return state;
  }
};

export default jobsReducer;
