import React from 'react';
import { shallow } from 'enzyme';

import Secure from '../../src/routes/secure';

describe('Secure route must...', () => {
  test('...be rendered.', () => {
    const wrapper = shallow(<Secure />);
    expect(wrapper).toBeTruthy();
  });
});
