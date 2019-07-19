import Api from "../api/apiMovies"
import { EXAMPLE_1 } from '../constants/example'

const exampleAction = () => ({
    type: EXAMPLE_1,
});



export const example = () => (dispatch) => {
    Api.getMovieReviews('429617')
    .then(response => { 
        console.log('RESPONSE', response);
        dispatch(exampleAction());
    })
    .catch(err => {
    console.log(err)
    })
  };
 