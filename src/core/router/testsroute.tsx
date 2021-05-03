import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { testsContext } from 'core/tests-context';

export const TestsRoute: React.FunctionComponent<RouteProps> = props => {
  const { testInProgress } = React.useContext(testsContext);
  const history = useHistory();

  React.useEffect(() => {
    console.log(testInProgress);
    if (!testInProgress) {
      history.push('/');
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};
