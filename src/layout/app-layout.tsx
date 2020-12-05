import React from 'react';
import * as classes from './app-layout.styles';

interface Props {
  background: string;
}

export const AppLayout: React.FunctionComponent<Props> = props => {
  const { children, background } = props;
  return <div className={classes.root(background)}>{children}</div>;
};
