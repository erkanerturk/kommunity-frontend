/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from '@/components/ui';
import cls from 'classnames';
import NBSearchResult from '@/containers/common/cards/navbar-search-result';
import debounce from 'lodash.debounce';

const DEBOUNCE_TIME = 300;
const TRANSITION_DURATION = '400ms';
class NBSearch extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputWrapperRef = React.createRef();
    this.formRef = React.createRef();
    this.state = {
      searchValue: '',
    };
    this.onChange = debounce(this.onChange, DEBOUNCE_TIME);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOrFocusOutside);
    document.addEventListener('focusin', this.handleClickOrFocusOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOrFocusOutside);
    document.removeEventListener('focusin', this.handleClickOrFocusOutside);
  }

  classes = () => {
    const { isSearchExpanded } = this.props;
    return {
      NBSearchWrapper: {
        'ml-4 sm:mr-4 sm:ml-0 relative sm:static sm:order-0': true,
        'w-2/4 sm:w-3/12': !isSearchExpanded,
        'w-full sm:w-10/12 sm:block': isSearchExpanded,
      },
      inputExtraClass: {
        [`rounded-24 placeholder:text-battleshipGrey placeholder:opacity-100 sm:bg-paleGrey 
        sm:focus:bg-paleGrey focus:border-lightBlueGrey sm:focus:shadow-none`]: true,
        'sm:hidden': !isSearchExpanded,
      },
      inputSearchIcon: {
        'stroke-current border-none': true,
        'text-battleshipGrey cursor-pointer sm:hidden': !isSearchExpanded,
        'text-blueyGrey': isSearchExpanded,
      },
    };
  };

  handleClickOrFocusOutside = event => {
    const { expandInput, shrinkInput, isSearchExpanded } = this.props;
    const isInputClicked = this.inputRef.current && this.inputRef.current.contains(event.target);
    const isInputWrapperClicked =
      this.inputWrapperRef.current && this.inputWrapperRef.current.contains(event.target);
    if (isInputClicked || isInputWrapperClicked) {
      expandInput();
      setTimeout(() => {
        this.inputRef.current.focus();
      }, 0);
    } else if (isSearchExpanded) {
      this.setState({ searchValue: '' });
      shrinkInput();
    }
  };

  onChange = searchValue => {
    this.setState({ searchValue: searchValue.trim() });
  };

  render() {
    const { isSearchExpanded, extraClassName } = this.props;
    const { searchValue } = this.state;
    const { inputExtraClass, NBSearchWrapper, inputSearchIcon } = this.classes();
    return (
      <div
        className={cls(NBSearchWrapper, extraClassName)}
        style={isSearchExpanded ? { transitionDuration: TRANSITION_DURATION } : null}
        ref={this.inputWrapperRef}
      >
        <Input
          iconLeft={<Icon name="Search" className={cls(inputSearchIcon)} />}
          value={searchValue}
          smallLeading
          showClearButton={isSearchExpanded}
          onChange={e => {
            this.onChange(e.target.value);
          }}
          extraClassName={cls(inputExtraClass)}
          setRef={this.inputRef}
          showBorder={false}
          placeholder="Search"
          type="text"
          id="navbar-input"
        />
        {isSearchExpanded && searchValue.length > 0 && <NBSearchResult queryText={searchValue} />}
      </div>
    );
  }
}
NBSearch.propTypes = {
  expandInput: PropTypes.func,
  extraClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isSearchExpanded: PropTypes.bool,
  shrinkInput: PropTypes.func,
};
export default NBSearch;
