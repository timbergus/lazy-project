import React from 'react';
import { mount } from 'enzyme';

import Loading from '../../src/components/loading';

describe('Loading component must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<Loading />);
    expect(wrapper).toBeTruthy();
  });
});
