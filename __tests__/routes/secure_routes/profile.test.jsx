import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Profile from '../../../src/routes/secure_routes/profile';

import { GET_COUNTER } from '../../../src/apollo/queries';

const mocks = [
  {
    request: {
      query: GET_COUNTER,
    },
    result: {
      data: {
        counter: {
          value: 0,
        },
      },
    },
  },
];

describe('Profile route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Profile />
      </MockedProvider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
