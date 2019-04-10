import React from 'react';
import { shallow } from 'enzyme';

import Login from '../../src/routes/login';

describe('Login route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toBeTruthy();
  });
});
