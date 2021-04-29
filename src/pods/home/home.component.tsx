import { Typography } from '@material-ui/core';
import { routes } from 'core/router';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classes from 'common/styles/tests.styles';
import logo from '../../assets/static/logo-english-quiz.png';
import Button from '@material-ui/core/Button';

export const HomeComponent = () => {
  const {
    title,
    mainContainer,
    inputContainer,
    homeBackContainer,
    pictureContainer,
    picture,
    inputField,
    insideBtnContainer,
    homeButton,
    arrowIcon,
    logoHome,
    homeLink,
  } = classes;

  return (
    <main className={mainContainer}>
      <div className={homeBackContainer}>
        <div className={`${pictureContainer} ${logoHome}`}>
          <img className={picture} src={logo}></img>
        </div>
        <Button className={homeButton} variant="contained">
          <Link to={{
            pathname: routes.testVerbForms,
            state: { fromHome: true },
          }} className={homeLink}>
            Start Test 'Irregular verbs'
          </Link>
        </Button>
        <Button className={homeButton} variant="contained">
          <Link to={{
            pathname: routes.testFillGap,
            state: { fromHome: true },
          }} className={homeLink}>
            Start Test<br/>'Fill the gap'
          </Link>
        </Button>
        <Button className={homeButton} variant="contained">
          <Link to={routes.configureVerbs} className={homeLink}>
            Choose your verbs
          </Link>
        </Button>
        <Button className={homeButton} variant="contained">
          <Link to={routes.userSettings} className={homeLink}>
            User Settings
          </Link>
        </Button>
      </div>
    </main>
  );
};
