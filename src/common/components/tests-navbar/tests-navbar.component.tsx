import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as styles from './tests-navbar.styles';
import { FinishTest } from "./components";

interface Props {
  score: number;
  currentQuestion: number;
}

export const TestsNavbar: React.FC<Props> = props => {
  const { score, currentQuestion } = props;
  const {
    appBarDiv,
    appBarTitle,
  } = styles;

  return (
    <div className={appBarDiv}>
      <AppBar position="absolute">
        <Toolbar>
          <span className={appBarTitle}>
            Score: {score}/{currentQuestion}
          </span>
          <FinishTest score={score}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
