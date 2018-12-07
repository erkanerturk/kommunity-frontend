import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '@/components/ui';

describe('UI Component: <Avatar />', () => {
  const wrapper = shallow(<Avatar />);

  test('renders all sizes correctly', () => {
    wrapper.setProps({ size: 'xs' });
    expect(wrapper.find('div').hasClass('w-6 h-6')).toEqual(true);
    wrapper.setProps({ size: 'sm' });
    expect(wrapper.find('div').hasClass('w-8 h-8')).toEqual(true);
    wrapper.setProps({ size: 'md' });
    expect(wrapper.find('div').hasClass('w-12 h-12')).toEqual(true);
    wrapper.setProps({ size: 'lg' });
    expect(wrapper.find('div').hasClass('w-16 h-16')).toEqual(true);
    wrapper.setProps({ size: 'xl' });
    expect(wrapper.find('div').hasClass('w-48 h-48')).toEqual(true);
  });

  test('renders given letters correctly', () => {
    wrapper.setProps({ letters: 'AB' });
    expect(
      wrapper
        .find('p')
        .children()
        .text(),
    ).toEqual('AB');
  });

  test('renders given image correctly', () => {
    const avatarImage = 'https://via.placeholder.com/150';
    wrapper.setProps({ src: 'https://via.placeholder.com/150' });

    expect(wrapper.find('UIImage').props().src).toEqual(avatarImage);
  });
});
