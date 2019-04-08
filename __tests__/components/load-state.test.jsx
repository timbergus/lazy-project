import React from 'react';
import { mount } from 'enzyme';

import { LoadStateComponent, LoadStateClient } from '../../src/components/load-state';

describe('Loading component must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<LoadStateComponent />);
    expect(wrapper).toBeTruthy();
  });
});

describe('Loading component must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<LoadStateClient />);
    expect(wrapper).toBeTruthy();
  });
});
