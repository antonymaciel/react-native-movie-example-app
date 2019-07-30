import React from 'react';
import renderer from 'react-test-renderer';
import mockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { movies } from '../../../config/jest/mockData';
import HomeContainer from '../homeContainer';
import * as actions from '../../actions/movies';
jest.mock('../../screens/home', () => 'Home');


it('renders home container using Snapshots', () => {
    const _getComponent = (props) => {
        const state = {movies: props};
        let store = mockStore(state);
        store.dispatch = jest.fn();
        actions.getMovies = jest.fn();
        return (
            renderer.create(
                <Provider store={store} >
                    <HomeContainer 
                        navigation={{getParam: jest.fn(), navigate: jest.fn()}}
                    />
                </Provider>
            )
        )
    };
  
  let component = _getComponent({movies: movies, loading: false});
  expect(component).toMatchSnapshot();
  
  
  component = _getComponent({movies: null, loading: true});
  expect(component).toMatchSnapshot();

  component = _getComponent({movies: null, loading: false});
  expect(component).toMatchSnapshot();
})