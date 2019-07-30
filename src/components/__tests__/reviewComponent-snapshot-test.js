import React from 'react';
import renderer from 'react-test-renderer';
import { review } from '../../../config/jest/mockData';
import ReviewComponent from '../reviewComponent'


it('renders a ReviewComponent using Snapshots', () => {
  expect(renderer.create(
    <ReviewComponent
        author={review.author}
        url={review.url}
        content={review.content}
    />
  )).toMatchSnapshot();
});
