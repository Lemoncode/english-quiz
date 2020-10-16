import * as React from 'react';
import { Verb } from '../test-verb-forms.vm';

interface Props {
  succeeded: boolean;
  verb: Verb;
}

export const ShowResults: React.FC<Props> = props => {
  const { succeeded, verb } = props;
  return succeeded ? (
    <span>RIGHT !!!!</span>
  ) : (
    <span>
      Nope, right answer:{' '}
      {`${verb.infinitive} / ${verb.past} /${verb.participle} / ${verb.translation}`}
    </span>
  );
};
