import { MOVIES_SUCCESS, MOVIES_FAILD, MOVIES_LOADING } from '../constants/movies'

const initialState = {
    movies: null,
    loading: false,
    error: false
}


const movies = (state = initialState, action) => {
    switch(action.type){
        case MOVIES_SUCCESS:
            console.log(action);
            const movies = action.movies.results;
            return {
                movies: state.movies ? [ ...state.movies, ...movies] : movies ,
                loading: false, 
                error: false
            };
        case MOVIES_LOADING:
            console.log(action);
            return { 
                ...state, 
                loading: true,
                error: false
            };
        case MOVIES_FAILD:
            console.log(action);
            return { 
                ...state, 
                loading: false, 
                error: true
            };
        default:
                return state;
    } 
}

export default movies;