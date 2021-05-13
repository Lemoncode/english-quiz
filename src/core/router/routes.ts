interface SwitchRoutes {
  root: string;
  testVerbForms: string;
  testFillGap: string;
  testMultipleChoice: string;
  testChooseTenses: string;
  finalScore: string;
  configureVerbs: string;
  userSettings: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  testVerbForms: '/test-forms',
  testFillGap: '/test-fill-gap',
  testMultipleChoice: '/test-multiple-choice',
  testChooseTenses: '/test-choose-tenses',
  finalScore: '/final-score',
  configureVerbs: '/configure-verbs',
  userSettings: '/user-settings',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {}

export const routes: Routes = {
  ...switchRoutes,
};
