import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Checkbox, CheckboxGroup } from '@/components/ui';

describe('UI Component: <ButtonGroup />', () => {
  const onChangeSpy = sinon.spy();
  const groupProps = {
    onChange: onChangeSpy,
    size: 'small',
  };
  const props = index => ({
    label: `label-${index}`,
    value: { prop1: index, prop2: `p-${index}` },
  });
  const wrapper = shallow(
    <CheckboxGroup {...groupProps}>
      <Checkbox {...props(0)} />
      <Checkbox {...props(1)} />
      <Checkbox {...props(2)} />
    </CheckboxGroup>,
  );
  test('is rendered', () => {
    expect(wrapper.length).toEqual(1);
  });
  test('has expected number of children', () => {
    expect(wrapper.children().length).toEqual(3);
  });
});
