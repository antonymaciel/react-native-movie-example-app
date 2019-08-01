import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeContainer from './containers/HomeContainer';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

const store= configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app! ajjajajajasdjfhaskjdfhaskdjhfliasudf</Text>
          <HomeContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
