/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { Icon } from './index';

const style = {
  card: 'absolute mt-2 border-blueyGrey bg-white p-1 rounded-4 shadow-md pin-x',
  disabled: 'text-blueyGrey hover:text-blueyGrey cursor-not-allowed',
  icon: 'ml-2 text-battleshipGrey',
  item: 'px-3 py-2 hover:bg-paleGrey cursor-pointer',
  list: 'list-reset',
  selected: 'wrapper flex items-center text-battleshipGrey hover:text-primary cursor-pointer',
  wrapper: 'ui-dropdown relative text-left',
};

class Dropdown extends Component {
  state = {
    selectedOption: this.props.selectedOption,
    showDropdown: false,
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ showDropdown: false });
    }
  };

  onChangeHandlerFactory = (id) => {
    const { onSelect, options } = this.props;
    return () => {
      this.setState({
        selectedOption: options.find(option => option.id === id).value,
        showDropdown: false,
      });
      /* istanbul ignore else */
      if (onSelect) {
        onSelect(id);
      }
    };
  };

  toggleDropdown = () => {
    if (!this.props.disabled) {
      this.setState({ showDropdown: !this.state.showDropdown });
    }
  };

  render() {
    const {
      disabled, extraClassName, options, placeholder,
    } = this.props;
    const { selectedOption, showDropdown } = this.state;

    return (
      <div className={cls(style.wrapper, extraClassName)} ref={this.setWrapperRef}>
        <div
          className={cls(style.selected, { [style.disabled]: disabled })}
          onClick={this.toggleDropdown}
        >
          <span>
            {selectedOption || placeholder}
          </span>
          <Icon
            className={cls(style.icon, { [style.disabled]: disabled })}
            name="ChevronDown"/>
        </div>
        {showDropdown && (
          <div className={style.card}>
            <ul className={style.list}>
              {options.map((option, index) => (
                <li key={index} className={cls('dropdown-item flex items-center', style.item)}
                    onClick={this.onChangeHandlerFactory(option.id)}>
                  {option.iconName && (
                    <Icon
                      size="20"
                      className="mr-4"
                      name={option.iconName}/>
                  )}

                  {option.imgSrc && (
                    <div
                      className="bg-cover inline-block w-6 h-6 rounded-full mr-4 border-white border-2"
                      style={{
                        backgroundImage: `url(${option.imgSrc})`,
                      }}
                    />
                  )}
                  <span>
                    {option.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  disabled: false,
  extraClassName: '',
  selectedOption: null,
};

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  selectedOption: PropTypes.object,
};

export default Dropdown;
