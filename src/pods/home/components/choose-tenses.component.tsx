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
import { chooseTensesContext } from 'core/choose-tenses';
import * as classes from './choose-tenses.styles';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ChooseTensesComponent: React.FC<Props> = props => {
  const { setChooseTenses } = React.useContext(chooseTensesContext);
  const { open, setOpen } = props;
  const [state, setState] = React.useState({
    hasInfinitive: false,
    hasPast: false,
    hasParticiple: false,
  });
  const { hasInfinitive, hasPast, hasParticiple } = state;
  const error =
    [hasInfinitive, hasPast, hasParticiple].filter(v => v).length < 1;
  const history = useHistory();
  const { title, noBtn, yesBtn } = classes;

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleNavigateToTest = () => {
    if (hasInfinitive && hasPast && hasParticiple) {
      history.push(routes.testVerbForms);
    } else {
      setChooseTenses({
        hasInfinitive,
        hasPast,
        hasParticiple,
      });
      history.push(routes.testChooseTenses);
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
                  checked={hasInfinitive}
                  onChange={handleChange}
                  name="hasInfinitive"
                  color="primary"
                />
              }
              label="Infinitive"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasPast}
                  onChange={handleChange}
                  name="hasPast"
                  color="primary"
                />
              }
              label="Past"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasParticiple}
                  onChange={handleChange}
                  name="hasParticiple"
                  color="primary"
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
