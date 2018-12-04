import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  container: 'inline-flex flex-column items-center w-10 h-6 p-1 rounded-md mr-2',
  label: 'border-white cursor-pointer bg-white rounded-full w-4 h-4',
};

class Switch extends React.Component {
  state = {
    enabled: false,
  };

  handleClick = () => {
    const { enabled } = this.state;
    const { disabled } = this.props;
    if (!disabled) {
      this.setState({
        enabled: !enabled,
      });
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { enabled } = this.state;
    const {
      extraClassname, name, disabled, displayText,
    } = this.props;
    return (
      <div className={cls('flex', 'items-center', extraClassname)}>
        <div className={cls(style.container,
          enabled ? 'bg-primary flex-row-reverse' : 'bg-lightBlueGrey',
          disabled && 'opacity-50')}>
          <input
          className={'hidden'}
          onClick={!disabled ? this.handleClick : undefined}
          type="checkbox"
          name={name}
          id={name}
          />
          <label className={cls(style.label, disabled && 'cursor-not-allowed')} htmlFor={name}></label>
        </div>
        <label className={cls('text-dark', !displayText && 'hidden')} htmlFor={name}>{name}</label>
      </div>
    );
  }
}
Switch.defaultProps = {
  disabled: false,
  displayText: false,
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  displayText: PropTypes.bool,
  extraClassname: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Switch;
