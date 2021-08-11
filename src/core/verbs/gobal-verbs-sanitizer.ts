export const sanitizeVerbSelectionList = (...selectedList: string[][]) =>
  selectedList.reduce((acc, item) => acc.filter(x => item.indexOf(x) > -1));
