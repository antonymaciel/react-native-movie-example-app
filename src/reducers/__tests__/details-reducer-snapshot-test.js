import details from '../details';
import { initialState } from '../details';
import { movieDetailsLoading, movieDetailsSuccess, movieDetailsFinish, movieDetailsFaild } from '../../actions/details';
import { movie } from '../../../config/jest/mockData';
 
it('returns the same state on an unhandled action', () => {
  expect(details(initialState, {type: '_NULL'})).toMatchSnapshot();
});

it('handles load action', () => {
  expect(details(initialState, movieDetailsLoading())).toMatchSnapshot();
});

it('handles error action', () => {
  expect(details(initialState, movieDetailsFaild())).toMatchSnapshot();
});

it('handles success action', () => {
  expect(details(initialState, movieDetailsSuccess({movieDetails: movie, totalPages: 15}))).toMatchSnapshot();
});

it('handles finish action', () => {
  expect(details(initialState, movieDetailsFinish())).toEqual({
      ...initialState,
     });
});
