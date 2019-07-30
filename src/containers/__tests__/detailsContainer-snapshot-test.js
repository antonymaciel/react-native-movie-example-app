import React from 'react';
import renderer from 'react-test-renderer';
import mockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { movie } from '../../../config/jest/mockData';
import DetailsContainer from '../detailsContainer';
import * as actions from '../../actions/details';
jest.mock('../../screens/details', () => 'Details');


it('renders details container using Snapshots', () => {
    const _getComponent = (props) => {
        const state = {movieDetails: props};
        let store = mockStore(state);
        store.dispatch = jest.fn();
        actions.movieDetailsFinish = jest.fn();
        actions.getMovieDetails = jest.fn();
        return (
            renderer.create(
                <Provider store={store} >
                    <DetailsContainer 
                        navigation={{getParam: jest.fn(), navigate: jest.fn()}}
                    />
                </Provider>
            )
        )
    };
  
  let component = _getComponent({movieDetails: movie, loading: false});
  expect(component).toMatchSnapshot();
  
  
  component = _getComponent({movieDetails: null, loading: true});
  expect(component).toMatchSnapshot();

  component = _getComponent({movieDetails: null, loading: false});
  expect(component).toMatchSnapshot();
})