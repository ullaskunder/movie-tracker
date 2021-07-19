import { ADDLIKE, REMOVELIKE } from "./types";

const initialState = {
    likedMovies = [],
}

export const movieReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADDLIKE: 
        return {...state,likedMovies:[]}
case REMOVELIKE: 
        return {...state,likedMovies:[]}
        default: return state;
    }
}
