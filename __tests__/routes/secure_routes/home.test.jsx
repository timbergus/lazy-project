import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Home from '../../../src/routes/secure_routes/home';

import { GET_INFO } from '../../../src/apollo/queries';

const mocks = [
  {
    request: {
      query: GET_INFO,
    },
    result: {
      data: {
        info: {
          message: 'Hello World!',
        },
      },
    },
  },
];

describe('Home route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
