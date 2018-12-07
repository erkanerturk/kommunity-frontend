import React from 'react';
import { shallow } from 'enzyme';
import { Notification } from '@/components/ui';

describe('UI Component: <Notification />', () => {
  const wrapper = shallow(
    <Notification styleType='danger' text="notification text"/>,
  );

  test('renders notification', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('renders style correctly', () => {
    wrapper.setProps({ styleType: 'danger' });
    expect(wrapper.hasClass('border-red')).toEqual(true);
    wrapper.setProps({ styleType: 'success' });
    expect(wrapper.hasClass('border-green')).toEqual(true);
    wrapper.setProps({ styleType: 'info' });
    expect(wrapper.hasClass('border-blue')).toEqual(true);
    wrapper.setProps({ styleType: 'warning' });
    expect(wrapper.hasClass('border-yellow')).toEqual(true);
  });

  test('is dismissable', () => {
    wrapper.setProps({ dismissable: true });

    const closer = wrapper.find('Icon').filterWhere((item) => {
      return item.prop('name') === 'X';
    });

    expect(closer).toHaveLength(1);

    closer.simulate('click');
    expect(wrapper.html()).toEqual(null);
  });
});

