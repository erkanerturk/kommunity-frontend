import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common: 'button inline-block text-center cursor-pointer border border-transparent border-box',
  container: {
    danger: 'text-white bg-red',
    outline: 'text-blueyGrey hover:bg-paleGrey border-lightBlueGrey',
    plain: 'text-primary hover:text-primaryDark bg-transparent',
    primary: 'text-white bg-primary',
    secondary: 'text-white bg-blueyGrey',
  },
  groupOrder: {
    first: 'rounded-l-24',
    last: 'rounded-r-24',
    middle: 'rounded-none',
    none: 'rounded-24',
  },
  label: {
    large: 'px-8 py-3 text-lg',
    medium: 'px-6 py-2 text-base leading-base',
    small: 'px-6 py-2 text-sm',
  },
};

class UIButton extends React.Component {
  getClassnames = () => {
    const {
      disabled, size, groupOrder, styleType,
    } = this.props;

    return cls(style.common, style.groupOrder[groupOrder],
      style.label[size], style.container[styleType], {
        // remove border-left on first item except outline styleType
        'border-l-0': groupOrder === 'first' && ['outline'].indexOf(styleType) < 0,
        // remove border-right on last item except outline styleType
        'border-r-0': groupOrder === 'last' && ['outline'].indexOf(styleType) < 0,
        // remove border-top-bottom and add bordercolor except outline styleType
        'border-transparent20 border-t-0 border-b-0': groupOrder !== 'none' && ['outline'].indexOf(styleType) < 0,
        'cursor-not-allowed': disabled,
        'hover:opacity-80': !disabled && ['primary', 'secondary'].indexOf(styleType) > -1,
        'opacity-20': disabled && styleType !== 'plain',
        'text-lightBlueGrey hover:text-lightBlueGrey': disabled && styleType === 'plain',
      });
  }

  render() {
    const {
      extraClassName, label, onClick, type, disabled,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={cls(this.getClassnames(), extraClassName)}
        disabled={disabled}
        type={type}
      >
        {label}
      </button>
    );
  }
}

UIButton.defaultProps = {
  disabled: false,
  groupOrder: 'none',
  size: 'medium',
  styleType: 'primary',
};

UIButton.propTypes = {
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
  groupOrder: PropTypes.oneOf(['first', 'middle', 'last', 'none']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  styleType: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'plain']).isRequired,
  type: PropTypes.string,
};

export default UIButton;
