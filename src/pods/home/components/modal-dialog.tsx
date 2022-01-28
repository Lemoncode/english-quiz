import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as classes from 'common/styles/tests.styles';

interface Props {
  showModal: boolean;
}

const { modalDialogContent, modalDialogTitle } = classes;

export const ModalDialog: React.FC<Props> = (props) => {
  const { showModal } = props;

  return (
    <Dialog
      PaperProps={{
        style: { borderRadius: 20 },
      }}
      open={showModal}
      aria-labelledby="dialog-title"
      keepMounted
    >
      <DialogTitle className={modalDialogTitle} id="dialog-title">
        {'Choose your verbs'}
      </DialogTitle>
      <DialogContent className={modalDialogContent}></DialogContent>
    </Dialog>
  );
};
