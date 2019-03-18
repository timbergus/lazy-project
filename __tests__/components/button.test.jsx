import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from '../../src/components/button';

describe('Button must...', () => {
  test('...be rendered.', () => {
    const wrapper = mount(<Button label="Click me!" onClick={() => {}} primary />);
    expect(wrapper).toBeTruthy();
  });

  test('...be clickable.', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button label="Click me!" onClick={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
