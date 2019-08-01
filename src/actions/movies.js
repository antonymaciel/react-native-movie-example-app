import Api from "../api/apiMovies"
import { MOVIES_SUCCESS, MOVIES_FAILD, MOVIES_LOADING, MOVIES_CLEAN} from '../constants/movies'

export const moviesSuccess = (movies) => ({
    type: MOVIES_SUCCESS,
    movies 
});

export const moviesFaild = () => ({
    type: MOVIES_FAILD, 
});

export const moviesLoading = () => ({
    type: MOVIES_LOADING,
});

export const moviesClean = () => ({
    type: MOVIES_CLEAN,
});

export const getMovies = (page) => (dispatch) => {
    if (page === 1) {
        dispatch(moviesClean());
    }
    dispatch(moviesLoading());
    Api.getMovies(page)
    .then((json) => {
        dispatch(moviesSuccess(json));
    })
    .catch(err => {
        console.log(err);
        dispatch(moviesFaild());
    })
  };
 