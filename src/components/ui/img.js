import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const UIImage = (props) => {
  const {
    src, alt, lazy, height, extraClassName, extraStyle,
  } = props;
  const Image = () => <img src={src} alt={alt} className={extraClassName} style={extraStyle} />;
  return (
    lazy
      ? <LazyLoad height={height}><Image/></LazyLoad>
      : <Image/>
  );
};

UIImage.defaultProps = {
};

UIImage.propTypes = {
  alt: PropTypes.string,
  extraClassName: PropTypes.string,
  extraStyle: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lazy: PropTypes.bool,
  src: PropTypes.string,
};

export default UIImage;
