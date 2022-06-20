export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USERNAME = "SET_USERNAME";
export const GET_JOBS = "GET_JOBS";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";
export const TOGGLE_ERROR = "TOGGLE_ERROR";

export const addToCartAction = (jobToAdd) => ({
  type: ADD_TO_CART,
  payload: jobToAdd,
});

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_FROM_CART,
  payload: indexToRemove,
});

export const setUsernameAction = (name) => ({
  type: SET_USERNAME,
  payload: name,
});

export const addToCartActionWithThunk = (jobToAdd) => {
  return async (dispatch, getState) => {
    console.log("this action has been dispatched by a thunk action creator!");
    console.log(
      "you can even check the current state before the dispatch!",
      getState()
    );
    if (getState().favorite.content.length < 5) {
      dispatch({
        type: ADD_TO_CART,
        payload: jobToAdd,
      });
    } else {
      alert("your cart is already full!");
    }
  };
};

export const getJobsAction = (props) => {
  return async (dispatch, getState) => {
    try {
      if (!getState().jobs.isLoading) {
        dispatch({
          type: TOGGLE_SPINNER,
        });
      }

      console.log("PROPS:", props);
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" +
          props +
          "&limit=5"
      );

      if (response.ok) {
        let data = await response.json();
        console.log("DATA:", data.data);
        let jobs = data.data;
        dispatch({
          type: GET_JOBS,
          payload: jobs,
        });

        // let's toggle the spinner off!
        dispatch({
          type: TOGGLE_SPINNER,
        });
      } else {
        // let's toggle the spinner off!
        dispatch({
          type: TOGGLE_SPINNER,
        });
        dispatch({
          type: TOGGLE_ERROR,
        });
      }
    } catch (error) {
      // let's toggle the spinner off!
      dispatch({
        type: TOGGLE_SPINNER,
      });
      dispatch({
        type: TOGGLE_ERROR,
      });
    }
  };
};
