import React from 'react';
import { mount } from 'enzyme';

import Users from '../../src/routes/users';

describe('Users route must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<Users />);
    expect(wrapper).toBeTruthy();
  });
});
