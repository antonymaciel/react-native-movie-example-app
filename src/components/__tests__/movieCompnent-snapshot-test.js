import React from 'react';
import renderer from 'react-test-renderer';
import { movie } from '../../../config/jest/mockData';
import MovieComponent from '../movieComponent';


it('renders a movieComponent using Snapshots', () => {
  expect(renderer.create(
    <MovieComponent
        year={movie.year}
        imageUrl={movie.imageUrl}
        title={movie.title}
        vote_average ={movie.vote_average}
    />
  )).toMatchSnapshot();
});

