import React from 'react';
import { shallow } from 'enzyme';
import Admin from '../components/Admin';

describe('Admin', () => {
  it('renders', () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper.exists()).toBe(true);
  });
});
