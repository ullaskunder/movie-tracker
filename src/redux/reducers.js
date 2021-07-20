import { ADD_LIKE, REMOVE_LIKE } from "./types";

const initialState = {
  likedMovies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likedMovies: !state.likedMovies.some(
          (item) => item.id == action.data.id
        )
          ? state.likedMovies.concat(action.data)
          : state.likedMovies,
      };
    case REMOVE_LIKE:
      return {
        ...state,
        likedMovies: state.likedMovies.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
