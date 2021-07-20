import { ADD_LIKE, REMOVE_LIKE } from "./types";

export const addToLiked = (movie) => ({ type: ADD_LIKE, data: movie });
export const removeFromLiked = (id) => ({ type: REMOVE_LIKE, id: id });
