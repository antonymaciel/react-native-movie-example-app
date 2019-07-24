import Api from "../api/apiMovies"
import { DETAILS_SUCCESS, DETAILS_FAILD, DETAILS_LOADING } from '../constants/details'

const movieDetailsSuccess = (movieDetails) => ({
    type: DETAILS_SUCCESS,
    movieDetails
});

const movieDetailsFaild = () => ({
    type: DETAILS_FAILD, 
});

const movieDetailsLoading = () => ({
    type: DETAILS_LOADING,
});

export const getMovieDetails = (idMovie) => (dispatch) => {
    dispatch(movieDetailsLoading());
    Api.getMovieDetails(idMovie)
    .then((json) => {
        dispatch(movieDetailsSuccess(json));
    })
    .catch(err => {
        console.log(err);
        dispatch(movieDetailsFaild());
    })
  };