import { defaultSelectedVerbs } from "./global-verbs.storage";



export const sanitizeVerbSelectionList = (selectedList: string[]) => {
  // Aquí
  // Haces un reduce sobre selectedList
  // y en cada item compruebas si existe con find o findIndex
  //defaultSelectedVerbs;

  selectedList.reduce((newSelectionList, item) => // comprueba que exite item en default selecteVerbs , [])

  defaultSelectedVerbs
};
