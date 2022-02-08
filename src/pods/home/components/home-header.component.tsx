import React from 'react';

import * as classes from 'common/styles/tests.styles';
import { ModalDialog } from './modal-dialog';

export const HomeHeader = () => {
  const { headerHome, logoImage, menuImageHome, headerMenuHome } = classes;
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  const body = (
    <div>
      <h2>Text in a modal</h2>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    </div>
  );
  return (
    <div className={headerHome}>
      <img
        className={logoImage}
        src={'assets/static/logo-english-quiz.png'}
        alt="imagen logo"
      />
      <div className={headerMenuHome} onClick={handleOpenModal}>
        <span>Verbs settings</span>
        <img
          className={menuImageHome}
          src={'assets/static/menu.png'}
          alt="imagen menu"
        />
        {open ? <ModalDialog open={open} /> : null}
      </div>
    </div>
  );
};
