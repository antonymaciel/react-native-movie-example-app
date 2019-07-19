

import Api from "../api/apiMovies"

const action = () => {
    Api.getMovieReviews('429617')
    .then(response => 
        console.log('RESPONSE', response)
    )
    .catch(err => {
    console.log(err)
    })
    return 'hola'
  }
 