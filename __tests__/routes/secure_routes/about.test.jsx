import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import About from '../../../src/routes/secure_routes/about';

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

describe('About route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <About label="Click me!" />
      </MockedProvider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
