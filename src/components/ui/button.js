import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { Icon, Loading } from '.';

class UIButton extends React.Component {
  getClassnames = () => {
    const {
      disabled,
      size,
      groupOrder,
      styleType,
      loading,
      iconOnly,
      iconLeft,
      iconRight,
    } = this.props;
    const style = {
      common: {
        'active:opacity-100': !disabled,
        'button text-center border-box focus:outline-none': true,
      },
      container: {
        custom: '',
        danger: {
          'focus:border-dark': !loading || !disabled,
          'text-white bg-red border-transparent': true,
        },
        outline: {
          'hover:bg-lightPaleGrey focus:border-blueyGrey active:shadow-button-blueyGrey active:bg-paleGrey':
            !loading || !disabled,
          'text-blueyGrey bg-white border-lightBlueGrey': true,
        },
        plain: 'text-primary bg-transparent border-transparent',
        primary: {
          'active:bg-primaryDarkx active:shadow-button-dark focus:border-dark':
            !loading && !disabled,
          'text-white bg-primary border-transparent': true,
        },
        secondary: {
          'active:bg-battleshipGrey active:shadow-button-dark focus:border-dark':
            !loading && !disabled,
          'text-white bg-blueyGrey border-transparent': true,
        },
      },
      groupOrder: {
        first: 'rounded-l-24',
        last: 'rounded-r-24',
        middle: 'rounded-none',
        none: 'rounded-24',
      },
      label: {
        large: cls({ 'px-5 py-3': iconLeft || iconRight, 'px-7 py-3': !iconLeft && !iconRight }),
        medium: cls({ 'px-4 py-2': iconLeft || iconRight, 'px-6 py-2': !iconLeft && !iconRight }),
        small: cls({ 'px-3 py-2': iconLeft || iconRight, 'px-5 py-2': !iconLeft && !iconRight }),
      },
      textWrapperCommon: {
        large: 'text-lg',
        medium: 'text-base leading-base',
        small: 'text-sm',
      },
    };

    return {
      buttonWrapperStyle: cls(
        style.common,
        style.container[styleType],
        style.textWrapperCommon[size],
        {
          [`${style.label[size]} ${style.groupOrder[groupOrder]}`]: !iconOnly,
          border: styleType !== 'custom' && styleType !== 'plain',
          // remove border-left on first item except outline styleType
          'border-l-0': groupOrder === 'first' && ['outline'].indexOf(styleType) < 0,
          // remove border-right on last item except outline styleType
          'border-r-0': groupOrder === 'last' && ['outline'].indexOf(styleType) < 0,
          // remove border-top-bottom and add bordercolor except outline styleType
          'border-transparent20 border-t-0 border-b-0 border':
            groupOrder !== 'none' && ['outline'].indexOf(styleType) < 0,
          'cursor-not-allowed': disabled || loading,
          'hover:opacity-90':
            !disabled && !loading && ['primary', 'secondary'].indexOf(styleType) > -1,
          'opacity-60': disabled && styleType !== 'plain',
          'rounded-full px-2 py-2': iconOnly,
        },
      ),
      iconsStyle: {
        iconSizeWithLabel: {
          large: 20,
          medium: 18,
          small: 16,
        },
        onlyIconSize: {
          large: 26,
          medium: 22,
          small: 18,
        },
      },
    };
  };

  render() {
    const {
      extraClassName,
      label,
      onClick,
      type,
      disabled,
      iconLeft,
      iconRight,
      loading,
      size,
      iconOnly,
    } = this.props;

    const { buttonWrapperStyle, iconsStyle } = this.getClassnames();
    const textButton = iconOnly ? null : (
      <div className={cls('flex items-center justify-center', { 'opacity-0': loading })}>
        {iconLeft ? (
          <Icon name={iconLeft} size={iconsStyle.iconSizeWithLabel[size]} className="mr-1 -ml-1" />
        ) : null}
        <p>{label}</p>
        {iconRight ? (
          <Icon name={iconRight} size={iconsStyle.iconSizeWithLabel[size]} className="ml-1 -mr-1" />
        ) : null}
      </div>
    );
    const onlyIconButton = iconOnly ? (
      <Icon name={iconOnly} size={iconsStyle.onlyIconSize[size]} />
    ) : null;
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        onClick={() => !disabled && !loading && typeof onClick === 'function' && onClick()}
        className={cls(buttonWrapperStyle, extraClassName)}
        disabled={disabled}
        type={type || 'submit'}
      >
        <div className="flex items-center justify-center">
          {textButton}
          {onlyIconButton}
          <div
            className={cls('absolute', {
              'flex items-center jutify-center': loading,
              hidden: !loading,
            })}
          >
            <Loading
              size={iconOnly ? iconsStyle.onlyIconSize[size] : iconsStyle.iconSizeWithLabel[size]}
            />
          </div>
        </div>
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
  iconLeft: PropTypes.string,
  iconOnly: PropTypes.string,
  iconRight: PropTypes.string,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  styleType: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'plain', 'custom']),
  type: PropTypes.string,
};

export default UIButton;
