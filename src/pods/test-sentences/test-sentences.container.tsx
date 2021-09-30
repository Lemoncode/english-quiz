import * as React from 'react';
import { loadFullSentencesCollection } from 'core/sentences';
import { SentenceEntityApi } from 'core/sentences';
import { pickRandomSentence } from './test-sentences.business';
import { TestSentencesComponent } from './test-sentences.component';
import { emptySentence, SentenceEntityVm } from './test-sentences.vm';
import { mapFromSentenceApiToSentenceVm } from './test-sentences.mappers';
import { globalVerbsContext } from 'core/verbs';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { scoreContext } from 'core/score';
import { settingsContext } from 'core/settings';

const INITIAL_ANSWERED_CORRECTLY = 0;
const INITIAL_CURRENT_QUESTION = 1;

export const TestSentencesContainer: React.FC = () => {
  const history = useHistory();
  const { verbCollection, selectedVerbs } = React.useContext(
    globalVerbsContext
  );
  const { setScore } = React.useContext(scoreContext);
  const { userSettings } = React.useContext(settingsContext);
  const [totalQuestions] = React.useState(userSettings.numberQuestions);
  const [currentQuestion, setCurrentQuestion] = React.useState(
    INITIAL_CURRENT_QUESTION
  );
  const [currentScore, setCurrentScore] = React.useState(
    INITIAL_ANSWERED_CORRECTLY
  );

  React.useEffect(() => {
    setScore({ totalQuestions, answeredCorrectly: INITIAL_ANSWERED_CORRECTLY });
  }, []);

  const selectedVerbsWithInfo = verbCollection.filter(
    x => selectedVerbs.indexOf(x.infinitive) > -1
  );

  const [sentencesCollection, setSentencesCollection] = React.useState<
    SentenceEntityApi[]
  >([]);
  const [sentenceSelected, setsentenceSelected] = React.useState<
    SentenceEntityVm
  >(emptySentence);

  React.useEffect(() => {
    loadFullSentencesCollection().then(sentence =>
      setSentencesCollection(sentence)
    );
  }, []);

  const mapRandomSentence = (
    sentencesCollection: SentenceEntityApi[]
  ): SentenceEntityVm => {
    const sentencesCollectionSelected = sentencesCollection.filter(
      x => selectedVerbs.indexOf(x.verb) > -1
    );
    return mapFromSentenceApiToSentenceVm(
      pickRandomSentence(sentencesCollectionSelected),
      selectedVerbsWithInfo
    );
  };

  React.useEffect(() => {
    if (sentencesCollection.length > 0) {
      setsentenceSelected(mapRandomSentence(sentencesCollection));
    }
  }, [sentencesCollection]);

  const handleSetNextQuestion = () => {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore({ totalQuestions, answeredCorrectly: currentScore });
      history.push(routes.finalScore);
    }
  };

  return (
    <TestSentencesComponent
      sentenceSelected={sentenceSelected}
      mapRandomSentence={mapRandomSentence}
      sentencesCollection={sentencesCollection}
      setsentenceSelected={setsentenceSelected}
      currentQuestion={currentQuestion}
      totalQuestions={totalQuestions}
      onNextQuestion={handleSetNextQuestion}
      score={currentScore}
      setScore={setCurrentScore}
    />
  );
};
