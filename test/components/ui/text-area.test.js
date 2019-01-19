import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { TextArea } from '@/components/ui';

describe('UI Component: <TextArea />', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(
    <TextArea
      id="id"
      extraClassName="w-6/12 mt-4 rounded-lg"
      placeholder="Search for existing communities, type in your keyword"
      onChange={onChangeSpy}
      label="label text"
      helpText="help text"
      errorText="error text"
      value="initial value"
    />,
  );

  const textarea = wrapper.find('textarea');

  test('sets initial value if provided', () => {
    expect(wrapper.state('value')).toBe('initial value');
  });

  test('renders Input', () => {
    expect(textarea.length).toEqual(1);
  });

  test('renders label', () => {
    const label = wrapper.find('.label');
    expect(label.text()).toEqual('label text');
  });

  test('renders help text', () => {
    const helpText = wrapper.find('.help-text');
    expect(helpText.text()).toEqual('help text');
  });

  test('renders error text', () => {
    const errorText = wrapper.find('.error-text');
    expect(errorText.text()).toEqual('error text');
  });

  test('onChangeHandler and onChange prop is called when input changed', () => {
    const newValue = 'Your new Value';
    const args = { target: { value: newValue } };
    textarea.simulate('change', args);
    expect(onChangeSpy.args[0][0]).toEqual(args);
    expect(wrapper.state('value')).toBe(newValue);
  });
});
