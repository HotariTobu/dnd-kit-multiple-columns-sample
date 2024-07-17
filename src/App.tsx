import { SortableContainer } from "./components/sortable-container";

export default () => {
  return (
    <SortableContainer
      initialItemsMap={
        new Map([
          ["items0", [1, 2, 3]],
          ["items1", [4, 5, 6]],
          ["items2", [7, 8, 9]],
          ["items3", []],
        ])
      }
    />
  );
};
