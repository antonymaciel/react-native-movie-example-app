import reviews from '../reviews';
import { initialState } from '../reviews';
import { movieReviewsSuccess, movieReviewsFaild, movieReviewsLoading, movieReviewsFinish } from '../../actions/reviews';
import { reviews as data } from '../../../config/jest/mockData';

it('returns the same state on an unhandled action', () => {
  expect(reviews(initialState, {type: '_NULL'})).toMatchSnapshot();
});

it('handles load action', () => {
  expect(reviews(initialState, movieReviewsLoading())).toMatchSnapshot();
});

it('handles error action', () => {
  expect(reviews(initialState, movieReviewsFaild())).toMatchSnapshot();
});

it('handles finish action', () => {
expect(reviews(initialState, movieReviewsFinish())).toEqual({
    ...initialState,
    });
});

it('handles success print action', () => {
    expect(reviews(initialState, movieReviewsSuccess({total_pages: 15, results: data, total_results: 75}))).toMatchSnapshot();
});

