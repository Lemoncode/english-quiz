import { Typography } from '@material-ui/core';
import { routes } from 'core/router';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const HomeComponent = () => {
  return (
    <div>
      <Typography variant="h3">Irregular verbs</Typography>
      <div>
        <Link to={routes.testVerbForms}>Start Test + participle tenses</Link>
      </div>
      <Link to={routes.configureVerbs}>Configure Verb List</Link>
    </div>
  );
};
