import { Typography } from '@material-ui/core';
import { routes } from 'core/router';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const HomeComponent = () => {
  return (
    <main>
      <Typography variant="h3" component="h1">
        Irregular verbs
      </Typography>
      <nav>
        <Link to={routes.testVerbForms}>Start Test + participle tenses</Link>
        <Link to={routes.configureVerbs}>Configure Verb List</Link>
        <Link to={routes.userSettings}>User Settings</Link>
      </nav>
    </main>
  );
};
