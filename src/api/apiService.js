import { API_URL } from '../constants/config';
import { API_KEY } from '../constants/config';

class Api {
  static performRequest(endpoint, requestData = {}, hasQueryString= false) {
    const querySymbol= hasQueryString ? '&' : '?';
    const url = `${API_URL}/${endpoint + querySymbol}api_key=${API_KEY}`;
    return fetch(url, requestData)
      .then(response => Promise.resolve(response.json()))
      .catch(error => Promise.reject(error));
  }

  static get(endpoint, hasQueryString) {
    const requestData = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return Api.performRequest(endpoint, requestData, hasQueryString);
  }

}

export default Api;
