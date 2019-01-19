import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';

// Example usage:
// <Icon name="Camera" className="my-6" />
// See whats available here:
// https://feathericons.com/
const Icon = props => {
  const { name } = props;
  const IconComp = Icons[name];
  return <IconComp {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
