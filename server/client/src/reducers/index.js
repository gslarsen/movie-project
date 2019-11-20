import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import MoviesOrderReducer from "./reducer-movies-order";
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from "./reducer-auth";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movies_order: MoviesOrderReducer,
  total_pages: TotalPagesReducer,
  form: formReducer,
  auth: AuthReducer,
});

export default rootReducer;