import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Users from '../../../src/routes/secure_routes/users';

import { GET_CREDENTIALS } from '../../../src/apollo/queries';

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

describe('Users route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users />
      </MockedProvider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
