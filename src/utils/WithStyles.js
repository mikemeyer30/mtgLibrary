import React from 'react';


export const withStyles = (Component, useStyles, useTheme) => {
  return (props) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    return <Component styles={styles} theme={theme} {...props} />;
  };
};