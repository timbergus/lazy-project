import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../src/routes/secure/home';

describe('Home route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
