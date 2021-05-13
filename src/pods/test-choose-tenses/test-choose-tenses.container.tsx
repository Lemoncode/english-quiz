import * as React from 'react';
import { TestChooseTensesComponent } from './test-choose-tenses.component';
import { Verb, createDefaultVerb } from 'common/model';
import { globalVerbsContext } from 'core/verbs';
import { pickRandomVerb } from 'common/business';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { scoreContext } from 'core/score';
import { settingsContext } from 'core/settings';

const INITIAL_ANSWERED_CORRECTLY = 0;
const INITIAL_CURRENT_QUESTION = 1;

export const TestChooseTensesContainer = () => {
  const history = useHistory();
  const { selectedVerbs, verbCollection } = React.useContext(
    globalVerbsContext
  );
  const { setScore } = React.useContext(scoreContext);
  const { userSettings } = React.useContext(settingsContext);
  const [totalQuestions] = React.useState(userSettings.numberQuestions);
  const [currentQuestion, setCurrentQuestion] = React.useState(
    INITIAL_CURRENT_QUESTION
  );
  const [currentVerb, setCurrentVerb] = React.useState<Verb>(
    createDefaultVerb()
  );
  const [currentScore, setCurrentScore] = React.useState(
    INITIAL_ANSWERED_CORRECTLY
  );

  React.useEffect(() => {
    setScore({ totalQuestions, answeredCorrectly: INITIAL_ANSWERED_CORRECTLY });
  }, []);

  React.useEffect(() => {
    if (currentQuestion <= totalQuestions) {
      const randomVerb = pickRandomVerb(selectedVerbs, verbCollection);
      setCurrentVerb(randomVerb);
    }
  }, [currentQuestion]);

  const handleSetNextQuestion = () => {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore({ totalQuestions, answeredCorrectly: currentScore });
      history.push(routes.finalScore);
    }
  };

  return (
    <TestChooseTensesComponent
      currentQuestion={currentQuestion}
      totalQuestions={totalQuestions}
      onNextQuestion={handleSetNextQuestion}
      verb={currentVerb}
      score={currentScore}
      setScore={setCurrentScore}
    />
  );
};
