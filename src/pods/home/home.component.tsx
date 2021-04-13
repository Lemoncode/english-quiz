import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import * as classes from './home.styles';
import { Button } from '@material-ui/core';

export const HomeComponent: React.FC = () => {
  const {
    mainContainer,
    title,
    backContainer,
    buttonsContainer,
    testFillGapButton,
    userSettingsButton,
  } = classes;
  const history = useHistory();

  const handleClick = (route: string) => {
    history.push(route);
  };
  return (
    <>
      <main className={mainContainer}>
        <h1 className={title}>English Quizz</h1>
        <div className={backContainer}>
          <div className={buttonsContainer}>
            <Button
              classes={{
                root: testFillGapButton,
              }}
              variant="contained"
              onClick={() => handleClick(routes.testFillGap)}
            >
              Start Test + participle tenses
            </Button>
          </div>
          <div className={buttonsContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleClick(routes.testVerbForms)}
            >
              Start Test &apos;Fill the gap&apos;
            </Button>
          </div>
          <div className={buttonsContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClick(routes.configureVerbs)}
            >
              Configure Verb List
            </Button>
          </div>
          <div className={classes.buttonsContainer}>
            <Button
              classes={{
                root: userSettingsButton,
              }}
              variant="contained"
              onClick={() => handleClick(routes.userSettings)}
            >
              User Settings
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
