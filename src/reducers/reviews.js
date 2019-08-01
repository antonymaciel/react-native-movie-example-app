import { REVIEWS_SUCCESS, REVIEWS_FAILD, REVIEWS_LOADING, REVIEWS_FINISH } from '../constants/reviews'

export const initialState = {
    reviews: null,
    totalPages: null, 
    totalReviews: null,
    loading: false,
    error: false
}


const reviews = (state = initialState, action) => {
    switch(action.type){
        case REVIEWS_SUCCESS:
            return {
                reviews: state.reviews ? [...state.reviews.results, ...action.reviews.results] : action.reviews.results,
                totalReviews: action.reviews.total_results,
                totalPages: action.reviews.total_pages,
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