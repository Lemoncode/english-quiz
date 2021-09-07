export const sanitizeVerbSelectionList = (a: string[], b: string[]): string[] =>
  Array.isArray(a && b) ? a.filter(x => b.indexOf(x) > -1) : [];
