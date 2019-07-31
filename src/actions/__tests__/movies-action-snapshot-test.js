import mockStore from 'redux-mock-store';
import { getMovies } from '../movies';
jest.mock('../../api/apiMovies');

it('should handle movies success action', async () => {
    const store = mockStore();
    await store.dispatch(getMovies(1));
    expect(store.getActions()).toMatchSnapshot();
});

