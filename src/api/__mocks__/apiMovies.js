
const movies = [
    {title: 'XMan'},
    {title: 'Spiderman'}
]
 
const reviews = [
  { 
    movie: 0, 
    results:[
      {author: 'Mark'},
      {author: 'Paul'}
    ]
  }
]

class MoviesApi {
    static getMovies= jest.fn().mockImplementation((page) => {
      return new Promise((resolve, reject) => {
        if(page < 15){
          resolve(movies);
        } else {
          reject( new Error('No more pages'));
        }
      });
    })

  
    static getMovieDetails = jest.fn().mockImplementation((movieId) => {
      return new Promise((resolve, reject) => {
        if(movieId < movies.length){
          resolve(movies[movieId]);
        } else {
          reject( new Error('Movie with ' + movieId + ' id not found.'));
        }
      });;
    })

    static getMovieReviews= jest.fn().mockImplementation((movieId, page) => {
      return new Promise((resolve, reject) => {
        if(page < 15){
          resolve(reviews);
        } else {
          reject( new Error('No more pages or not exist review for movie ' + movieId));
        }
      });
    })

  }
  export default MoviesApi;


  