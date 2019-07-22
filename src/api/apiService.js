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

  static post(endpoint, data, contentType) {
    const requestData = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType,
        // 'Content-Type': 'application/json', 'multipart/form-data'
      },
      body: data,
    };
    return Api.performRequest(endpoint, requestData);
  }

  static put(endpoint, data) {
    const requestData = {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return Api.performRequest(endpoint, requestData);
  }

  static delete(endpoint, data) {
    const requestData = {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return Api.performRequest(endpoint, requestData);
  }
  
}

export default Api;
