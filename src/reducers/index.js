import { combineReducers } from 'redux';
import movies from './movies'
import movieDetails from './details'
import movieReviews from './reviews'

const reducers = combineReducers({
    movies,
    movieDetails,
    movieReviews
});

export default reducers;