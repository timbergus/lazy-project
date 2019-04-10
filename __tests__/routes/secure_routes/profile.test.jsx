import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../../../src/routes/secure_routes/profile';

describe('Profile route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toBeTruthy();
  });
});
