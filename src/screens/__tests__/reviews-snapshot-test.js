import React from 'react';
import renderer from 'react-test-renderer';
import { reviews, movie } from '../../../config/jest/mockData';
import Reviews from '../reviews';


it('renders home screen using Snapshots', () => {
  expect(renderer.create(
    <Reviews
        total_results={3}
        results={reviews}
        posterUrl={movie.imageUrl}
        onNewPage={jest.fn()} 
    />
  )).toMatchSnapshot();
});
