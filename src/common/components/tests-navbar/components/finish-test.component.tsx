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
import * as classes from './finish-test.styles';

interface Props {
  score: number;
  currentQuestion: number;
}

export const FinishTest: React.FC<Props> = props => {
  const { score, currentQuestion } = props;
  const [open, setOpen] = React.useState(false);
  const { setScore } = React.useContext(scoreContext);
  const history = useHistory();
  const { finishBtn } = classes;

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleFinishTest = () => {
    // Set current score before navigating to 'finalScore'
    setScore({ totalQuestions: currentQuestion, answeredCorrectly: score});
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Finish the test earlier?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you want to finish the test before answering all the questions please press button 'YES'.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleFinishTest}
            variant="contained"
            color="primary"
            disableElevation
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};