import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  testVerbForms: string;
  testFillGap: string;
  testMultipleChoice: string;
  finalScore: string;
  configureVerbs: string;
  userSettings: string;
  testSentenceFillGap: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  testVerbForms: '/test-forms',
  testFillGap: '/test-fill-gap',
  testMultipleChoice: '/test-multiple-choice',
  finalScore: '/final-score',
  configureVerbs: '/configure-verbs',
  userSettings: '/user-settings',
  testSentenceFillGap: '/test-sentence-fill-gap',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {}

export const routes: Routes = {
  ...switchRoutes,
};
