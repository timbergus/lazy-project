import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Login from '../../src/routes/login';

describe('Login route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(
      <MockedProvider mocks={[]}>
        <Login />
      </MockedProvider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
