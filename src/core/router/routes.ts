import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  testVerbForms: string;
  finalScore: string;
  configureVerbs: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  testVerbForms: '/test-forms',
  finalScore: '/final-score',
  configureVerbs: '/configure-verbs',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {}

export const routes: Routes = {
  ...switchRoutes,
};
