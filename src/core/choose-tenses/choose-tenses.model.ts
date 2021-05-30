export interface ChooseTenses {
  hasInfinitive: boolean;
  hasPast: boolean;
  hasParticiple: boolean;
}

export const createDefaultChooseTenses = (): ChooseTenses => ({
  hasInfinitive: false,
  hasPast: false,
  hasParticiple: false,
});
