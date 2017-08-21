import React from 'react';

const withDefaultTheme = (defaultTheme, Wrapped) => {
  const WrappedTheme = ({ theme, ...props }) => {
    const t = Object.assign({}, defaultTheme, theme);
    return <Wrapped theme={t} {...props} />;
  };

  WrappedTheme.defaultProps = {
    theme: defaultTheme,
  };

  WrappedTheme.propTypes = {
    theme: Wrapped.propTypes.theme,
  };

  return WrappedTheme;
};

export default withDefaultTheme;
