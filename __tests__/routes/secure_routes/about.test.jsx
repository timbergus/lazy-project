import React from 'react';
import { shallow } from 'enzyme';

import About from '../../../src/routes/secure_routes/about';

describe('About route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<About label="Click me!" />);
    expect(wrapper).toBeTruthy();
  });
});
