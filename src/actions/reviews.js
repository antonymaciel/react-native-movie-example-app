import Api from "../api/apiMovies"
import { REVIEWS_SUCCESS, REVIEWS_FAILD, REVIEWS_LOADING, REVIEWS_FINISH } from '../constants/reviews'

export const movieReviewsSuccess = (reviews) => ({
    type: REVIEWS_SUCCESS,
    reviews
});

export const movieReviewsFaild = () => ({
    type: REVIEWS_FAILD, 
});

export const movieReviewsLoading = () => ({
    type: REVIEWS_LOADING,
});

export const movieReviewsFinish = () => ({
    type: REVIEWS_FINISH,
});

export const getMovieReviews = (idMovie, page) => (dispatch) => {
    dispatch(movieReviewsLoading());
    Api.getMovieReviews(idMovie, page)
    .then((json) => {
        dispatch(movieReviewsSuccess(json));
    })  
    .catch(err => {
        console.log(err);
        dispatch(movieReviewsFaild());
    })
  };

