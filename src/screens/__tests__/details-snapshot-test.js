import React from 'react';
import renderer from 'react-test-renderer';
import { movie } from '../../../config/jest/mockData';
import Details from '../details';



it('renders details screen using Snapshots', () => {
  expect(renderer.create(
    <Details
        urlbackdropImage={movie.urlbackdropImage}
        urlposterImage={movie.imageUrl}
        generes={movie.generes}
        title={movie.title}
        vote_count={movie.vote_count}
        vote_average={movie.vote_average}
        overview={movie.overview}
        goToReviews={jest.fn()}
    />
  )).toMatchSnapshot();
});

