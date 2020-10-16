import * as api from 'core/verbs';
import * as vm from './configure-verbs.vm';

const mapFromVerbFromGlobalToVm = (
  verb: api.VerbEntityGlobal,
  selection: string[]
): vm.VerbEntity => ({
  selected: selection.findIndex(v => v === verb.infinitive) !== -1,
  verbKey: verb.infinitive,
  verbDescription: `${verb.infinitive} / ${verb.past} /${verb.participle} / ${verb.translation}`,
});

export const mapFromVerbCollectionFromGlobalToVm = (
  collection: api.VerbEntityGlobal[],
  selection: string[]
): vm.VerbEntity[] =>
  collection.map(item => mapFromVerbFromGlobalToVm(item, selection));
