import React from 'react';
import { mount } from 'enzyme';

import About from '../../src/routes/about';

describe('About route must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<About label="Click me!" />);
    expect(wrapper).toBeTruthy();
  });
});
