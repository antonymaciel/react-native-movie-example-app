import React from 'react';
import renderer from 'react-test-renderer';
import { movie } from '../../../config/jest/mockData';
import MovieComponentContainer from '../movieComponentContainer';
jest.mock('../../components/movieComponent', () => 'Movie');


it('renders movie container success using Snapshots', () => {
    expect(renderer.create(
        <MovieComponentContainer 
            movie={movie}
            navigation={{getParam: jest.fn(), navigate: jest.fn()}}
        />  
    )).toMatchSnapshot();
})