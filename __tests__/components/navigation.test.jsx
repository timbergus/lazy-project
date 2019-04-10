import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../../src/components/navigation';

describe('Navigation component must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toBeTruthy();
  });
});
