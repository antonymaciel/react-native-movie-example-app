import api from './apiService';

class MoviesApi {
  static getMovies(page = 1) {
    return api.get(`discover/movie?page=${page}`, true);
  }

  static getMovieDetails(movieId) {
    return api.get('movie/' + movieId);
  }

  static getMovieReviews(movieId, page = 1) {
    return api.get('movie/' + movieId + `/reviews?page=${page}`, true);
  }
  
}
export default MoviesApi;
