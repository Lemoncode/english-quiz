export const sanitizeVerbSelectionList = (...selectedList: any[]) =>
  selectedList.reduce((acc, item) => acc.filter(x => item.indexOf(x) > -1));
