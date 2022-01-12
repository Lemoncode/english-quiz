import React from 'react';
import logo from '../../../assets/static/logo-english-quiz.png';
import menuLogo from '../../../assets/static/menu.png';
import * as classes from 'common/styles/tests.styles';

export const HomeHeader = () => {
  const { headerHome, logoImage, menuImageHome, headerMenuHome } = classes;
  return (
    <div className={headerHome}>
      <img className={logoImage} src={logo} alt="imagen logo" />
      <div className={headerMenuHome}>
        <span>Verbs settings</span>
        <img className={menuImageHome} src={menuLogo} alt="imagen menu" />
      </div>
    </div>
  );
};
