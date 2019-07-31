import mockStore from 'redux-mock-store';
import { getMovieReviews } from '../reviews';
jest.mock('../../api/apiMovies');

it('should handle reviews success action', async () => {
    const store = mockStore();
    await store.dispatch(getMovieReviews(0, 1));
    expect(store.getActions()).toMatchSnapshot();
});
