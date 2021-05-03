import { VerbQuiz, VerbTenses } from './test-fill-gap.vm';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
import { trimObject, lowObject } from 'common/business';

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): VerbCorrect => {
  const verbLower = lowObject(verb);
  const quizTrimmed = trimObject(quiz, ['response']);
  const quizLower = lowObject(quizTrimmed, ['response']);

  let verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive =
    quizLower.tense === VerbTenses.infinitive
      ? verbLower.infinitive === quizLower.response
      : true;
  verbCorrect.past =
    quizLower.tense === VerbTenses.past
      ? verbLower.past === quizLower.response
      : true;
  verbCorrect.participle =
    quizLower.tense === VerbTenses.participle
      ? verbLower.participle === quizLower.response
      : true;
  verbCorrect.all =
    verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};
