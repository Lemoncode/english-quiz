import React from 'react';
import * as classes from './app-layout.styles';

export const AppLayout: React.FunctionComponent = props => {
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};
