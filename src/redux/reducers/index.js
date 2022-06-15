import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from "../actions";

const initialState = {
  favorite: {
    content: [],
    error: false,
  },
  user: {
    name: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          content: [...state.favorite.content, action.payload],
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          content: [
            ...state.favorite.content.slice(0, action.payload),
            ...state.favorite.content.slice(action.payload + 1),
          ],
        },
      };
    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
