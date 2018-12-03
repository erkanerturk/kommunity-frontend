import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  container: {
    active: 'bg-primary flex-row-reverse',
    common: 'inline-flex flex-column items-center w-10 h-6 p-1 rounded-md mr-2',
    deactive: 'bg-lightBlueGrey',
    disabled: 'bg-lightBlueGrey opacity-50',
  },
  label: {
    common: 'border-white cursor-pointer bg-white rounded-full w-4 h-4',
    disabled: 'cursor-not-allowed',
  },
  switch: {
    common: 'hidden',
  },
  text: {
    display: '',
    hide: 'hidden',
  },
};

class Switch extends React.Component {
  state = {
    status: 'deactive',
  };

  handleClick = () => {
    const { status } = this.state;

    if (status === 'active') {
      this.setState({
        status: 'deactive',
      });
    } else if (status === 'deactive') {
      this.setState({
        status: 'active',
      });
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  titleCase = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }

  componentDidMount() {
    if (this.props.disabled) {
      this.setState({
        status: 'disabled',
      });
    }
  }

  render() {
    const { status } = this.state;
    const {
      extraClassname, name, disabled, text,
    } = this.props;
    const title = this.titleCase(status);
    return (
      <div className={extraClassname}>
        <div className={cls(style.container[status], style.container.common)}>
          <input
          className={(style.switch[status], style.switch.common)}
          onClick={!disabled ? this.handleClick : undefined}
          type="checkbox"
          name={name}
          id={name}
          />
          <label className={cls(style.label[status], style.label.common)} htmlFor={name}></label>
        </div>
        <label className={cls(style.text[text])} htmlFor={name}>{title}</label>
      </div>
    );
  }
}
Switch.defaultProps = {
  disabled: false,
  text: 'hide',
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  extraClassname: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.oneOf(['display', 'hide']),
};

export default Switch;
