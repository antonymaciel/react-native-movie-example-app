import React from 'react';
import renderer from 'react-test-renderer';
import mockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { reviews } from '../../../config/jest/mockData';
import ReviewsContainer from '../reviewsContainer';
import * as actions from '../../actions/movies';
jest.mock('../../screens/reviews', () => 'Reviews');


it('renders reviews container using Snapshots', () => {
    const _getComponent = (props) => {
        const state = {movieReviews: props};
        let store = mockStore(state);
        store.dispatch = jest.fn();
        actions.getMovieReviews = jest.fn();
        actions.movieReviewsFinish = jest.fn();
        return (
            renderer.create(
                <Provider store={store} >
                    <ReviewsContainer 
                        navigation={{getParam: jest.fn(), navigate: jest.fn()}}
                    />
                </Provider>
            )
        )
    };

  let component = _getComponent({reviews: reviews, totalReviews: reviews.length ,loading: false});
  expect(component).toMatchSnapshot();
  
  
  component = _getComponent({reviews: null, totalReviews: 0, loading: true});
  expect(component).toMatchSnapshot();

  component = _getComponent({reviews: null, totalReviews: 0, loading: false});
  expect(component).toMatchSnapshot();
})