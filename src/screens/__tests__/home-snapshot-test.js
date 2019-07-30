import React from 'react';
import renderer from 'react-test-renderer';
import { movies } from '../../../config/jest/mockData';
import Home from '../home';


it('renders home screen using Snapshots', () => {
  expect(renderer.create(
    <Home
        navigation={jest.fn()}
        onNewPage={jest.fn()}
        movies={movies}
    />
  )).toMatchSnapshot();
});

