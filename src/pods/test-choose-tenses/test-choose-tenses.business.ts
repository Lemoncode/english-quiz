import { VerbQuiz } from './test-choose-tenses.vm';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
import { trimObject, lowObject } from 'common/business';

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): VerbCorrect => {
  const verbLower = lowObject(verb);
  const quizTrimmed = trimObject(quiz, ['infinitive', 'past', 'participle']);
  const quizLower = lowObject(quizTrimmed, [
    'infinitive',
    'past',
    'participle',
  ]);

  const verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive = quizLower.hasInfinitive
    ? verbLower.infinitive === quizLower.infinitive
    : true;
  verbCorrect.past = quizLower.hasPast
    ? verbLower.past === quizLower.past
    : true;
  verbCorrect.participle = quizLower.hasParticiple
    ? verbLower.participle === quizLower.participle
    : true;
  verbCorrect.all =
    verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};
