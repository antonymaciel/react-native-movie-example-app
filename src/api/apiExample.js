import api from './ApiService';

class ExampleApi {
  static getExample(endpoint) {
    return api.get(`${endpoint}`);
  }
}
export default ExampleApi;
