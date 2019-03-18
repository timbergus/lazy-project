import React from 'react';
import { mount } from 'enzyme';

import Home from '../../src/routes/home';

describe('Home route must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
