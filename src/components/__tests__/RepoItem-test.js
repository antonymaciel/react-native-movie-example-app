import {
    Text,
    View,
  } from 'react-native';
  import React from 'react';

 
  
  import RepoItem, { styles } from '../componentExample';
  //import { repos } from '../../../config/jest/mockData';
  
  import enzyme from 'enzyme';
  import Adapter from "enzyme-adapter-react-16";
  enzyme.configure({ adapter: new Adapter() });
  const { shallow } = enzyme;

  const repo =  {
    description: 'Useful description goes here.',
    id: 1,
    name: 'Test 1',
    stargazers_count: 50000,
  };


it('renders a RepoItem using Enzyme 1', () => {
    const wrapper = shallow(
      <RepoItem
        repo={repo}
        selectRepo={jest.fn()}
      />
    );
    
    const { description, name, stargazers_count } = repo;
    expect(wrapper.contains(
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
      </View>
    )).toBe(true);

    expect(wrapper.contains(<Text>{description}</Text>)).toBe(false);

    expect(wrapper.find({style: styles.item}).length).toBe(1);
  });

  