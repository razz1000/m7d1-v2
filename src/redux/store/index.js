import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favorite";
import mainReducer from "../reducers/favorite";
import jobsReducer from "../reducers/jobs";
import userReducer from "../reducers/user";

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  user: userReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
