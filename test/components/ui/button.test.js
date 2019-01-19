import React from 'react';
import { Camera, Loader } from 'react-feather';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Button } from '@/components/ui';

describe('UI Component: <Button />', () => {
  const onClickSpy = sinon.spy();
  const wrapper = mount(
    <Button
      styleType="primary"
      size="medium"
      onClick={onClickSpy}
      label="button-text"
      iconLeft="Camera"
      type="button"
    />,
  );

  const button = wrapper.find('button');
  const buttonLabel = wrapper.find('p');
  const buttonIcon = wrapper.find('svg');

  test('renders button correctly', () => {
    expect(button.length).toEqual(1);
    expect(buttonIcon.length).toEqual(2);
    expect(buttonLabel.length).toEqual(1);
    expect(buttonLabel.text()).toEqual('button-text');
  });
  test('renders button`s icon correctly', () => {
    expect(wrapper.find(Camera).length).toBe(1);
  });
  test('renders loader icon correctly', () => {
    expect(wrapper.find(Loader).length).toBe(1);
  });
  test('renders icon with props passed', () => {
    expect(wrapper.find(Camera).props().size).toBe(18);
  });

  test('onClick is called when clicked', () => {
    button.simulate('click');
    expect(onClickSpy.callCount).toEqual(1);
  });
});
