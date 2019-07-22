import api from './apiService';

class MoviesApi {
  static getMovies(page = 1) {
    return api.get(`discover/movie?page=${page}`, true);
  }

  static getMovieDetails(movieId) {
    return api.get('movie/' + movieId);
  }

  static getMovieReviews(movieId) {
    return api.get('movie/' + movieId + '/reviews');
  }
  
}
export default MoviesApi;
