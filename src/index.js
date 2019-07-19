import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import AppNavigator from './navigator/AppNavigator';

const store= configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
