import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = () => createStore(reducers, applyMiddleware(thunk));

export default configureStore;

