import { REVIEWS_SUCCESS, REVIEWS_FAILD, REVIEWS_LOADING, REVIEWS_FINISH } from '../constants/reviews'

const initialState = {
    reviews: null,
    loading: false,
    error: false
}


const reviews = (state = initialState, action) => {
    switch(action.type){
        case REVIEWS_SUCCESS:
                const reviews = state.reviews ? 
                    { ...state.reviews, results: { ...state.reviews.results, ...action.reviews.results}} 
                : 
                    action.reviews;
            return {
                reviews,
                loading: false, 
                error: false
            };
        case REVIEWS_LOADING:
            return { 
                ...state, 
                loading: true,
                error: false
            };
        case REVIEWS_FAILD:
            return { 
                ...state, 
                loading: false, 
                error: true
            };
        case REVIEWS_FINISH:
            return initialState;    
        default:
                return state;
    } 
}

export default reviews;