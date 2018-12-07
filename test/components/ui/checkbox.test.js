import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Checkbox } from '@/components/ui';

describe('UI Component: <RadioButton />', () => {
  const onChangeSpy = sinon.spy();
  const props = {
    label: 'Radio Button Label',
    onChange: onChangeSpy,
    size: 'small',
    value: { prop1: 'abc', prop2: 100 },
  };
  const wrapper = shallow(<Checkbox {...props} />);

  const inputTag = wrapper.find('input');
  const labelTags = wrapper.find('p');

  test('renders value prop', () => {
    expect(inputTag.props().value).toEqual(JSON.stringify([props.value]));
  });

  test('renders input element', () => {
    expect(inputTag.length).toEqual(1);
  });

  test('renders label element', () => {
    expect(labelTags.text()).toEqual('Radio Button Label');
    expect(labelTags.length).toEqual(1);
  });
  test('onChangeHandler and onChange prop is called when radio button clicked', () => {
    const val = { prop: 'a' };
    const newValue = JSON.stringify([val]);
    const args = { target: { value: newValue } };
    inputTag.simulate('change', args);
    expect(onChangeSpy.args[0][0]).toEqual(val);
  });
});
