import { routes } from 'core/router';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classes from 'common/styles/tests.styles';
import logo from '../../assets/static/logo-english-quiz.png';
import Button from '@material-ui/core/Button';

export const HomeComponent = () => {
  const {
    mainContainer,
    homeBackContainer,
    pictureContainer,
    picture,
    homeButton,
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
          <Link to={routes.testMultipleChoice} className={homeLink}>
            Start Test<br/>'Multiple choice'
          </Link>
        </Button>
        <Button className={homeButton} variant="contained">
          <Link to={routes.testFillGap} className={homeLink}>
            Start Test<br/>'Fill the gap'
          </Link>
        </Button>
        <Button className={homeButton} variant="contained">
          <Link to={routes.testVerbForms} className={homeLink}>
            Start Test<br/>'Irregular verbs'
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
