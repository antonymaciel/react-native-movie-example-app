import { MOVIES_SUCCESS, MOVIES_FAILD, MOVIES_LOADING, MOVIES_CLEAN } from '../constants/movies'

export const initialState = {
    movies: null,
    totalPages: null,
    loading: false,
    error: false
}


const movies = (state = initialState, action) => {
    switch(action.type){
        case MOVIES_SUCCESS:
            const movies = action.movies.results;
            return {
                movies: state.movies ? [ ...state.movies, ...movies] : movies,
                loading: false, 
                totalPages: action.movies.total_pages,
                error: false
            };
        case MOVIES_LOADING:
            return { 
                ...state, 
                loading: true,
                error: false
            };
        case MOVIES_FAILD:
            return { 
                ...state, 
                loading: false, 
                error: true
            };
        case MOVIES_CLEAN:
            return initialState;
        default:
                return state;
    } 
}

export default movies;