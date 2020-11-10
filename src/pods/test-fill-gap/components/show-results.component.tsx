import * as React from 'react';
import { Verb } from "../test-fill-gap.vm";

interface Props {
	isCorrect: boolean;
	verb: Verb;
}

export const ShowResultsComponent: React.FC<Props> = props => {
	const { isCorrect, verb } = props;
	return isCorrect ? (
		<span>RIGHT !!!!</span>
	) : (
		<span>
			Nope, right answer:{' '}
			{`${verb.infinitive} / ${verb.past} /${verb.participle} / ${verb.translation}`}
		</span>
	);
};
