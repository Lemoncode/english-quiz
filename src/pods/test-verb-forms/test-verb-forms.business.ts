import { VerbQuiz } from './test-verb-forms.vm';
import { Verb, VerbCorrect, createDefaultVerbCorrect } from 'common/model';
import { trimObject, lowObject } from 'common/business';

export const answerIsCorrect = (verb: Verb, quiz: VerbQuiz): VerbCorrect => {
  const verbLower = lowObject(verb);
  const quizTrimmed = trimObject(quiz);
  const quizLower = lowObject(quizTrimmed);

  let verbCorrect = createDefaultVerbCorrect();
  verbCorrect.infinitive = verbLower.infinitive === quizLower.infinitive;
  verbCorrect.past = verbLower.past === quizLower.past;
  verbCorrect.participle = verbLower.participle === quizLower.participle;
  verbCorrect.all =
    verbCorrect.infinitive && verbCorrect.past && verbCorrect.participle;
  return verbCorrect;
};
