import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common:
    'ui-textarea inline-block border border-lgray w-full px-4 rounded-4 bg-white leading-2xl text-base focus:text-black focus:bg-white focus:border-blue focus:border-2 focus:outline-none disabled:bg-xlgray',
  errorText: 'error-text text-red my-2 leading-base',
  helpText: 'help-text text-gray leading-base',
  label: 'label text-black block leading-base font-normal',
  state: {
    default: 'text-gray',
    error: 'text-black border-red focus:border-red',
  },
  wrapper: 'wrapper relative',
};

class UITextArea extends Component {
  state = {
    value: this.props.value,
  };

  onChangeHandler(e, onChange) {
    const { value } = e.target;
    this.setState({
      value,
    });
    /* istanbul ignore else */
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      placeholder,
      label,
      helpText,
      errorText,
      disabled,
      extraClassName,
      onChange,
      extraWrapperClassName,
    } = this.props;

    const wrapperClass = cls(style.wrapper, extraWrapperClassName);
    const inputClass = cls(style.common, extraClassName, {
      [style.state.default]: !errorText,
      [style.state.error]: errorText,
    });

    // TODO: add labelFor
    const labelElem = label ? (
      <label className={style.label}>{label}</label>
    ) : null;
    const helpTextElem = helpText ? (
      <div className={style.helpText}>{helpText}</div>
    ) : null;
    const errorTextElem = errorText ? (
      <div className={style.errorText}>{errorText}</div>
    ) : null;
    return (
      <Fragment>
        {labelElem}
        <div className={wrapperClass}>
          <textarea
            placeholder={placeholder}
            className={inputClass}
            disabled={disabled}
            value={this.state.value}
            onChange={event => this.onChangeHandler(event, onChange)}
          />
        </div>
        {helpTextElem}
        {errorTextElem}
      </Fragment>
    );
  }
}

UITextArea.defaultProps = {
};

UITextArea.propTypes = {
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  extraClassName: PropTypes.string,
  extraWrapperClassName: PropTypes.string,
  helpText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default UITextArea;
