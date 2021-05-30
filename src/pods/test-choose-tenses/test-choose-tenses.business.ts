import { VerbQuiz } from './test-choose-tenses.vm';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
import { trimObject, lowObject } from 'common/business';
import { ChooseTenses } from 'core/choose-tenses';

export const answerIsCorrect = (
  verb: Verb,
  quiz: VerbQuiz,
  chooseTenses: ChooseTenses
): VerbCorrect => {
  const verbLower = lowObject(verb);
  const quizTrimmed = trimObject(quiz);
  const quizLower = lowObject(quizTrimmed);

  const verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive = chooseTenses.hasInfinitive
    ? verbLower.infinitive === quizLower.infinitive
    : true;
  verbCorrect.past = chooseTenses.hasPast
    ? verbLower.past === quizLower.past
    : true;
  verbCorrect.participle = chooseTenses.hasParticiple
    ? verbLower.participle === quizLower.participle
    : true;
  verbCorrect.all =
    verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};
