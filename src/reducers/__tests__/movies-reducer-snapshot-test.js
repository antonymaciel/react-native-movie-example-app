import movies from '../movies';
import { initialState } from '../movies';
import { moviesLoading, moviesFaild, moviesClean, moviesSuccess } from '../../actions/movies';
import { movies as data } from '../../../config/jest/mockData';

it('returns the same state on an unhandled action', () => {
  expect(movies(initialState, {type: '_NULL'})).toMatchSnapshot();
});

it('handles load action', () => {
  expect(movies(initialState, moviesLoading())).toMatchSnapshot();
});

it('handles error action', () => {
  expect(movies(initialState, moviesFaild())).toMatchSnapshot();
});

it('handles clear action', () => {
  expect(movies(initialState, moviesClean())).toEqual({
    ...initialState,
   });;
});

it('handles success print action', () => {
    expect(movies(initialState, moviesSuccess({total_pages: 15, results: data}))).toMatchSnapshot();
});


