import React from 'react';
import { shallow } from 'enzyme';

import LazyComponent from '../../src/components/lazy-component';

describe('Loading component must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<LazyComponent page="home" />);
    expect(wrapper).toBeTruthy();
  });
});
