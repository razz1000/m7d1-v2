import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  content: [],
  error: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        content: [
          ...state.content.slice(0, action.payload),
          ...state.content.slice(action.payload + 1),
        ],
      };

    default:
      return state;
  }
};

export default favoriteReducer;
