import api from './apiService';

class MoviesApi {
  static getMovies() {
    return api.get('discover/movie');
  }

  static getMovieDetails(movieId) {
    return api.get('movie/' + movieId);
  }

  static getMovieReviews(movieId) {
    return api.get('movie/' + movieId + '/reviews');
  }
  
}
export default MoviesApi;
