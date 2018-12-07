module.exports = () => {
  return ({ addVariant }) => {
    addVariant('disabled', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled${separator}${className}:disabled`;
      });
    });
    addVariant('last-child', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.last-child${separator}${className}:last-child`;
      });
    });
  };
};
