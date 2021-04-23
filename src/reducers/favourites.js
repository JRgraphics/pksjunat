import { GET_FAVOURITES, UPDATE_FAVOURITES } from "../actions/types";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVOURITES:
    case UPDATE_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};

export const favouriteSelectors = {
  getFavourites: (state = initialState) => state.favourites,
};

export default favouriteReducer;
