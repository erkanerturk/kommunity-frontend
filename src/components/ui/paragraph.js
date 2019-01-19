import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  '2xl': 'text-2xl leading-lg',
  base: 'text-base leading-base',
  lg: 'text-lg leading-lg',
  sm: 'text-sm leading-sm',
  xl: 'text-xl leading-xl',
  xs: 'text-xs leading-xs',
};

const UIParagraph = props => {
  const { className, type, extraClassName, children } = props;
  // TODO: we can use props.extraStyle instead of props.style
  return (
    <p
      className={cls(className || style[type], extraClassName)}
      style={props.style} // eslint-disable-line react/destructuring-assignment
    >
      {children}
    </p>
  );
};

UIParagraph.defaultProps = {
  type: 'base',
};

UIParagraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  type: PropTypes.string,
};

export default UIParagraph;
