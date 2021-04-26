import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { scoreContext } from 'core/score';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { settingsContext } from 'core/settings';
import * as classes from './finish-test.styles';

interface Props {
  score: number;
}

export const FinishTest: React.FC<Props> = props => {
  const { score } = props;
  const { userSettings } = React.useContext(settingsContext);
  const { setScore } = React.useContext(scoreContext);
  const [open, setOpen] = React.useState(false);
  const [totalQuestions] = React.useState(userSettings.numberQuestions);
  const history = useHistory();
  const {
    finishBtn,
    dialogTitle,
    dialogContent,
    dialogNoBtn,
    dialogYesBtn,
  } = classes;

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleFinishTest = () => {
    // Set current score before navigating to 'finalScore'
    setScore({ totalQuestions, answeredCorrectly: score});
    history.push(routes.finalScore);
  };

  return (
    <>
      <Button
        className={finishBtn}
        onClick={handleOpenDialog}
        variant="contained"
        disableElevation
      >
        Finish test
      </Button>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
      >
        <DialogTitle className={dialogTitle}>
          Are you sure you want to cancel this test?
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={dialogContent}>
            If you want to finish the test before answering all the questions please press 'Yes'.
            Otherwise press 'No'.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={dialogNoBtn}
            onClick={handleCloseDialog}
            variant="contained"
            disableElevation
          >
            No
          </Button>
          <Button
            className={dialogYesBtn}
            onClick={handleFinishTest}
            variant="contained"
            disableElevation
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
