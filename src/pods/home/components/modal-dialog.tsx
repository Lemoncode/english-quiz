import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import * as classes from 'common/styles/tests.styles';

interface Props {
  open: boolean;
}

const { modalDialogContent, modalDialogTitle } = classes;

export const ModalDialog: React.FC<Props> = (props) => {
  const { open } = props;

  return (
    <Dialog
      PaperProps={{
        style: { borderRadius: 20 },
      }}
      open={open}
      aria-labelledby="dialog-title"
      keepMounted
    >
      <DialogTitle className={modalDialogTitle} id="dialog-title">
        {'Choose your verbs'}
      </DialogTitle>
      <DialogContent className={modalDialogContent}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};
