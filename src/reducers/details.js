import { DETAILS_SUCCESS, DETAILS_FAILD, DETAILS_LOADING, DETAILS_FINISH } from '../constants/details'

export const initialState = {
    movieDetails: null,
    loading: false,
    error: false
}


const details = (state = initialState, action) => {
    switch(action.type){
        case DETAILS_SUCCESS:

            return {
                movieDetails: action.movieDetails,
                loading: false, 
                error: false
            };
        case DETAILS_LOADING:
            return { 
                ...state, 
                loading: true,
                error: false
            };
        case DETAILS_FAILD:
            return { 
                ...state, 
                loading: false, 
                error: true
            };
        case DETAILS_FINISH:
            return initialState;   
        default:
                return state;
    } 
}

export default details;