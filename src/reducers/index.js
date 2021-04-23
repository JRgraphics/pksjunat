import { combineReducers } from "redux";
import favouriteReducer from "./favourites";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
});

export default rootReducer;
