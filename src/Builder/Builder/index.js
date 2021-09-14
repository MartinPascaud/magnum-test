// @flow
import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { nanoid } from "nanoid";

import type { Layout, Row } from "../types";

import { Columns } from "react-bulma-components";
import Sidebar from "./Sidebar";
import PageBuilder from "./Page";

type Props = {|
  layout: Layout,
  setLayout: (((Layout) => Layout) | Layout) => void,
|};

export default function Builder({ layout, setLayout }: Props): React.Node {
  // Question 3
  // Implémenter la fonctionnalité d'ajoute d'une row dans le layout (n'oublier pas de donner un id unique)
  const addRow = React.useCallback(
    (addedRow: Row) =>
      setLayout((previousLayout) => {
        const newRow = {
          id: nanoid(),
          components: [],
          columns: []
        }
        return [...previousLayout, newRow]
      }),
      [setLayout]
  )

  const deleteRow = React.useCallback(
    (deletedRow: Row) =>
      setLayout((previousLayout) => {
        const rowIndex = previousLayout.findIndex(
          (row) => row.id === deletedRow.id
        );

        const newLayout = [
          ...previousLayout.slice(0, rowIndex),
          ...previousLayout.slice(rowIndex + 1),
        ];

        return newLayout;
      }),
    [setLayout]
  );

  const updateRow = React.useCallback(
    (updatedRow: Row) =>
      setLayout((previousLayout) => {
        const rowIndex = previousLayout.findIndex(
          (row) => row.id === updatedRow.id
        );

        const newLayout = [
          ...previousLayout.slice(0, rowIndex),
          updatedRow,
          ...previousLayout.slice(rowIndex + 1),
        ];

        return newLayout;
      }),
    [setLayout]
  );

  // Question 2
  // Implémenter la fonctionnalité reset du layout
  const reset = React.useCallback(
    () => setLayout([]),
    [setLayout]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <Columns>
        <Columns.Column size={2}>
          <Sidebar />
        </Columns.Column>

        <Columns.Column size={10}>
          <PageBuilder
            layout={layout}
            addRow={addRow}
            deleteRow={deleteRow}
            updateRow={updateRow}
            reset={reset}
          />
        </Columns.Column>
      </Columns>
    </DndProvider>
  );
}
