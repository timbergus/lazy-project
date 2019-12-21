import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Secure from '../../src/routes/secure';

import { GET_CREDENTIALS } from '../../src/apollo/queries';

const mocks = [
  {
    request: {
      query: GET_CREDENTIALS,
    },
    result: {
      data: {
        credentials: {
          username: 'username',
          password: 'password',
        },
      },
    },
  },
];

describe('Secure route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Secure />
      </MockedProvider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
