import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { globalVerbsContext } from 'core/verbs';

export const AuthRoute: React.FunctionComponent<RouteProps> = props => {
  const { verbCollection } = React.useContext(globalVerbsContext);
  const history = useHistory();

  React.useEffect(() => {
    if (verbCollection.length === 0) {
      history.push('/');
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};
