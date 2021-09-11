export const sanitizeVerbSelectionList = (
  selectedVerbs: string[],
  defaultSelectedVerbs: string[]
): string[] =>
  Array.isArray(selectedVerbs && defaultSelectedVerbs)
    ? selectedVerbs.filter(x => defaultSelectedVerbs.indexOf(x) > -1)
    : [];
