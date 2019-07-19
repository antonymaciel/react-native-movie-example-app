import api from './apiService';

class ExampleApi {
  static getExample(endpoint) {
    return api.get(`${endpoint}`);
  }
}
export default ExampleApi;
