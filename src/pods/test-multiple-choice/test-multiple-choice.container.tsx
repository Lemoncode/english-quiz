import * as React from 'react';
import { TestMultipleChoiceComponent } from './test-multiple-choice.component';
import { Verb, createDefaultVerb } from 'common/model';
import { globalVerbsContext } from 'core/verbs';
import { pickRandomVerb } from './test-multiple-choice.business';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { scoreContext } from 'core/score';
import { settingsContext } from 'core/settings';

const INITIAL_ANSWERED_CORRECTLY = 0;
const INITIAL_CURRENT_QUESTION = 1;

export const TestMultipleChoiceContainer = () => {
  const history = useHistory();
  const { selectedVerbs, verbCollection } = React.useContext(globalVerbsContext);
  const { setScore } = React.useContext(scoreContext);
  const { userSettings } = React.useContext(settingsContext);
  const [totalQuestions] = React.useState(userSettings.numberQuestions);

  const [currentQuestion, setCurrentQuestion] = React.useState(
    INITIAL_CURRENT_QUESTION
  );
  const [currentVerb, setCurrentVerb] = React.useState<Verb>(
    createDefaultVerb()
  );
  const [otherOption1, setOtherOption1] = React.useState<Verb>(
    createDefaultVerb()
  );
  const [otherOption2, setOtherOption2] = React.useState<Verb>(
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
      let otherRandom:Verb, otherRandom2:Verb;
      // Check the first other option is not repeated
      do {
        otherRandom = pickRandomVerb(selectedVerbs, verbCollection);
      } while(randomVerb.infinitive === otherRandom.infinitive);
      setOtherOption1(otherRandom);
      // Check the second other option is not repeated
      do {
        otherRandom2 = pickRandomVerb(selectedVerbs, verbCollection);
      } while(randomVerb.infinitive === otherRandom2.infinitive ||
              otherRandom.infinitive === otherRandom2.infinitive);
      setOtherOption2(otherRandom2);
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
    <TestMultipleChoiceComponent
      currentQuestion={currentQuestion}
      totalQuestions={totalQuestions}
      onNextQuestion={handleSetNextQuestion}
      verb={currentVerb}
      otherOption1={otherOption1}
      otherOption2={otherOption2}
      score={currentScore}
      setScore={setCurrentScore}
    />
  );
};