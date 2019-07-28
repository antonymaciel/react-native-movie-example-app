import React from 'react';
import renderer from 'react-test-renderer';

import RepoItem from '../componentExample';

const repo =  {
    description: 'Useful description goes here.',
    id: 1,
    name: 'Test 1',
    stargazers_count: 50000,
  };


it('renders a RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      repo={repo}
      selectRepo={jest.fn()}
    />
  )).toMatchSnapshot();
});

it('renders a selected RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      isSelected
      repo={repo}
      selectRepo={jest.fn()}
    />
  )).toMatchSnapshot();
});
