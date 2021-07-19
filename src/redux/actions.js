import { ADDLIKE, REMOVELIKE } from "./types";

export const addToLiked = () => ({ type: ADDLIKE });
export const removeFromLiked = () => ({ type: REMOVELIKE });
