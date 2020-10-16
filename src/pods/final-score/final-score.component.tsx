import { Button, Typography } from '@material-ui/core';
import { HistoryTwoTone } from '@material-ui/icons';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

interface Props {
  total: number;
  correct: number;
}

export const FinalScoreComponent: React.FC<Props> = props => {
  const { total, correct } = props;
  const history = useHistory();

  const handleNavigatetoMain = () => {
    history.push(routes.root);
  };

  return (
    <div>
      <Typography variant="h5">
        Your Final score: {`${correct}/${total}`}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleNavigatetoMain}>
        Back to main
      </Button>
    </div>
  );
};
