import * as React from 'react';
import { Verb, VerbCorrect } from '../test-verb-forms.vm';
import { generateHint } from "../test-verb-forms.business";

interface Props {
  secondAttempt: boolean;
  verbCorrect: VerbCorrect;
  verb: Verb;
}

export const ShowResults: React.FC<Props> = props => {
  const { secondAttempt, verbCorrect, verb } = props;
  return verbCorrect.all ? (
    <span>RIGHT !!!!</span>
  ) : !secondAttempt ? (
    <span>
      You have a second chance. You failed in {generateHint(verbCorrect)}.
    </span>
  ) : (
    <span>
      Nope, right answer:{' '}
      {`${verb.infinitive} / ${verb.past} /${verb.participle} / ${verb.translation}`}
    </span>
  );
};
