import React from 'react';
import logo from '../../../assets/static/logo-english-quiz.png';
import menuLogo from '../../../assets/static/menu.png';
import * as classes from 'common/styles/tests.styles';
import { ModalDialog } from './modal-dialog';

export const HomeHeader = () => {
  const { headerHome, logoImage, menuImageHome, headerMenuHome } = classes;

  const [showModal, setShowModal] = React.useState(false);

  const handleModal = () => {
    setShowModal((preValue) => !preValue);
  };

  return (
    <div className={headerHome}>
      <img className={logoImage} src={logo} alt="imagen logo" />
      <div className={headerMenuHome} onClick={handleModal}>
        <span>Verbs settings</span>
        <img className={menuImageHome} src={menuLogo} alt="imagen menu" />
        {showModal ? <ModalDialog showModal={showModal} /> : null}
      </div>
    </div>
  );
};
