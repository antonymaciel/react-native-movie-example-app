import { API_URL } from '../constants/config';
import { API_KEY } from '../constants/config';

class Api {
  static performRequest(endpoint, requestData = {}) {
    const url = `${API_URL}/${endpoint}?api_key=${API_KEY}`;
    console.log(url);
    return fetch(url, requestData)
    .then(response => Promise.resolve(response.json()))
    .catch(error => Promise.reject(error));
  }

  static get(endpoint) {
    const requestData = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return Api.performRequest(endpoint, requestData);
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
