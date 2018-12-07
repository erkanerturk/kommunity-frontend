import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common: 'w-1 border-blueyGrey bg-white my-4 rounded-4',
  lg: 'shadow-lg',
  md: 'shadow-md',
  none: 'shadow',
  padding: 'px-8 py-6',
  tiny: 'shadow',
};

const Card = (props) => {
  const {
    applyPadding, extraClassName, extraStyle, shadow,
  } = props;
  return (
    <div className={cls(extraClassName, style[shadow], style.common, {
      [style.padding]: applyPadding,
    })} style={extraStyle}>
      {props.children}
    </div>
  );
};

Card.defaultProps = {
  applyPadding: true,
};

Card.propTypes = {
  applyPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  extraClassName: PropTypes.string,
  extraStyle: PropTypes.string,
  shadow: PropTypes.oneOf(['none', 'tiny', 'md', 'lg']).isRequired,
};

export default Card;
