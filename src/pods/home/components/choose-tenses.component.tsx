import * as React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import * as classes from './choose-tenses.styles';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ChooseTensesComponent: React.FC<Props> = props => {
  const { open, setOpen } = props;
  const [state, setState] = React.useState({
    infinitive: false,
    past: false,
    participle: false,
  });
  const { infinitive, past, participle } = state;
  const error = [infinitive, past, participle].filter(v => v).length < 1;
  const history = useHistory();
  const { title, noBtn, yesBtn } = classes;

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleNavigateToTest = () => {
    console.log(state);
    if (infinitive && past && participle) {
      history.push(routes.testVerbForms);
    }
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle className={title}>Choose at least one tense</DialogTitle>
      <DialogContent>
        <FormControl required error={error} component="fieldset">
          <FormLabel component="legend">Pick at least 1</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={infinitive}
                  onChange={handleChange}
                  name="infinitive"
                  color="primary"
                />
              }
              label="Infinitive"
            />
            <FormControlLabel
              control={
                <Checkbox checked={past} onChange={handleChange} name="past" />
              }
              label="Past"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={participle}
                  onChange={handleChange}
                  name="participle"
                />
              }
              label="Participle"
            />
          </FormGroup>
          {error && (
            <FormHelperText>You must pick at least one tense</FormHelperText>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          className={noBtn}
          onClick={handleCloseDialog}
          variant="contained"
          disableElevation
        >
          No
        </Button>
        <Button
          className={yesBtn}
          onClick={handleNavigateToTest}
          variant="contained"
          disableElevation
          disabled={error}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
