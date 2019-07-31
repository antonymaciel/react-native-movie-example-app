import mockStore from 'redux-mock-store';
import { getMovieDetails } from '../details';
jest.mock('../../api/apiMovies');

it('should handle details success action', async () => {
    const store = mockStore();
    await store.dispatch(getMovieDetails('1'));
    expect(store.getActions()).toMatchSnapshot();
});

