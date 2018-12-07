import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const styles = {
  horizontal: 'flex',
  vertical: 'flex flex-col items-start',
};
const CheckBoxGroup = (props) => {
  const {
    size, extraClassName, orientation, children, onChange,
  } = props;
  const newCheckboxes = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      extraClassName: { 'w-full': orientation === 'vertical' },
      onChange,
      size,
    });
  });

  return <div className={cls(extraClassName, styles[orientation])}>{newCheckboxes}</div>;
};
CheckBoxGroup.defaultProps = {
  orientation: 'vertical',
};
CheckBoxGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium']),
};

export default CheckBoxGroup;
