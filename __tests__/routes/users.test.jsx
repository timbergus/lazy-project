import React from 'react';
import { shallow } from 'enzyme';

import Users from '../../src/routes/secure/users';

describe('Users route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper).toBeTruthy();
  });
});
