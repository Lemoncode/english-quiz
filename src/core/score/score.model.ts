export interface Score {
  totalQuestions: number;
  answeredCorrectly: number;
}

export const createDefaultScore = (): Score => ({
  totalQuestions: 0,
  answeredCorrectly: 0,
});
