import * as React from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { VerbEntity } from './configure-verbs.vm';
import produce, { immerable } from 'immer';
import { getOnlySelected } from './configure-verbs.business';
import * as classes from './configure-verbs.styles';

interface Props {
  verbCollection: VerbEntity[];
  onSave: (verbs: VerbEntity[]) => void;
  onCancel: () => void;
}

enum RootSelectionStates {
  all,
  some,
  none,
} // Possible states of the root checkbox
interface Selectable {
  selected: boolean;
} // Interface created for filtering

// Custom hook for handling changes in selected items' collection
const useSelectionManager = function<T extends Selectable>(
  initalAllItems: T[],
  initialSelection: T[]
) {
  const [selection, setSelection] = React.useState<T[]>(initialSelection);
  const [rootSelectionState, setRootSelectionState] = React.useState<
    RootSelectionStates
  >(RootSelectionStates.none);
  const [allItems, setAllItems] = React.useState<T[]>(initalAllItems);

  const calculateSelectionState = (allItems: T[], selection: T[]) => {
    if (!selection || selection.length === 0) {
      return RootSelectionStates.none;
    } else {
      return selection.length === allItems.length
        ? RootSelectionStates.all
        : RootSelectionStates.some;
    }
  };

  React.useEffect(() => {
    setSelection(initialSelection);
    setRootSelectionState(
      calculateSelectionState(initalAllItems, initialSelection)
    );
    setAllItems(initalAllItems);
  }, [initalAllItems]);

  const clearAllSelectedItems = () =>
    setAllItems(
      allItems.map(element => {
        return {
          ...element,
          selected: false,
        };
      })
    );
  const selectAllItems = () =>
    setAllItems(
      allItems.map(element => {
        return {
          ...element,
          selected: true,
        };
      })
    );
  const getOnlySelected = (collection: T[]): T[] => {
    return collection.filter(({ selected }) => selected);
  };

  React.useEffect(() => {
    setSelection(getOnlySelected(allItems));
  }, [allItems]);

  React.useEffect(() => {
    setRootSelectionState(calculateSelectionState(allItems, selection));
  }, [selection]);

  return {
    selection,
    setSelection,
    allItems,
    setAllItems,
    rootSelectionState,
    selectAllItems,
    clearAllSelectedItems,
  };
};

export const ConfigureVerbsComponent: React.FC<Props> = props => {
  const { verbCollection, onSave, onCancel } = props;

  const {
    selection,
    allItems,
    setAllItems,
    rootSelectionState,
    selectAllItems,
    clearAllSelectedItems,
  } = useSelectionManager(verbCollection, getOnlySelected(verbCollection));

  const {
    mainContainer,
    title,
    backContainer,
    btnContainer,
    saveBtn,
    cancelBtn,
    verbList,
    verbTitle,
  } = classes;

  const handleCheckedChange = (verbId: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTemporalSelection = produce(allItems, draft => {
      const index = draft.findIndex(item => item.verbKey === verbId);

      if (index !== -1) {
        draft[index].selected = !draft[index].selected;
      }
    });

    setAllItems(newTemporalSelection);
  };

  const handleRootCheckboxChange = () => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (rootSelectionState !== RootSelectionStates.all) {
      selectAllItems();
    } else {
      clearAllSelectedItems();
    }
  };

  return (
    <main className={mainContainer}>
      <h1 className={title}>Verbs Settings:</h1>
      <div className={backContainer}>
        <div className={btnContainer}>
          <Button
            className={saveBtn}
            variant="contained"
            color="primary"
            onClick={() => onSave(allItems)}
            disableElevation
          >
            Save
          </Button>
          <Button
            className={cancelBtn}
            variant="contained"
            color="secondary"
            onClick={onCancel}
            disableElevation
          >
            Cancel
          </Button>
        </div>
        <Divider />
        <ul className={verbList}>
          <li className={verbTitle}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rootSelectionState !== RootSelectionStates.none}
                  onChange={handleRootCheckboxChange()}
                  color="primary"
                  indeterminate={
                    rootSelectionState === RootSelectionStates.some
                  }
                />
              }
              label={`Total selected: ${selection.length}`}
            />
          </li>
          <Divider />
          {allItems.map(verb => (
            <>
              <CheckBoxMemo
                classTitle={verbTitle}
                verb={verb}
                handleCheckedChange={handleCheckedChange}
              />
              <Divider />
            </>
          ))}
        </ul>
      </div>
    </main>
  );
};

interface PropsCheckBoxMemo {
  verb: VerbEntity;
  handleCheckedChange: (verbId: string) => (e, checked) => void;
  classTitle: string;
}

const CheckBoxMemo = React.memo((props: PropsCheckBoxMemo) => {
  const { verb, handleCheckedChange, classTitle } = props;
  return (
    <li key={verb.verbKey} className={classTitle}>
      <FormControlLabel
        control={
          <Checkbox
            checked={verb.selected}
            onChange={handleCheckedChange(verb.verbKey)}
            color="primary"
          />
        }
        label={verb.verbKey}
      />
    </li>
  );
});
