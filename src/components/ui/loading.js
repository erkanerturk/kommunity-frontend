import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '.';

const style = {
  animation: 'spin 2s linear infinite',
};

const Loading = ({ size }) => {
  return <Icon name="Loader" size={size} style={style} />;
};

Loading.defaultProps = {
  size: 36,
};

Loading.propTypes = {
  size: PropTypes.number,
};

export default Loading;
