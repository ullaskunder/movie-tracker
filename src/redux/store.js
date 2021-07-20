import { createStore, combineReducers } from "redux";
import { movieReducer } from "./reducers";

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default configureStore = createStore(rootReducer);
