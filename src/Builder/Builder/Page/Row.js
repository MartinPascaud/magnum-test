// @flow
import * as React from "react";
import { useDrop } from "react-dnd";
import { nanoid } from "nanoid";

import type {
  Row as RowType,
  Column as ColumnType,
  Component as ComponentType,
} from "../../types";

import { Panel, Columns as BulmaColumns, Button } from "react-bulma-components";
import Component from "./Component";
import Column from "./Column";

type Props = {|
  row: RowType,
  onChange: (RowType) => void,
  onDelete: (RowType) => void,
|};

function Row({ row, onChange, onDelete }: Props): React.Node {
  const { components, columns } = row;

  const [, dropRef] = useDrop(
    () => ({
      accept: ["COMPONENT", "LAYOUT_TYPE"],
      drop: (droppedElement) => {
        if (droppedElement.type === "COMPONENT" && !row.columns.length) {
          onChange({
            ...row,
            components: [
              ...components,
              {
                componentId: droppedElement.id,
                id: nanoid(),
                options: {},
              },
            ],
          });
        } else if (droppedElement.type === "LAYOUT_TYPE") {
          onChange({
            ...row,
            components: [],
            columns: JSON.parse(droppedElement.id).map(
              (columnSize, columnIndex) => {
                let column = {
                  id: nanoid(),
                  size: columnSize,
                  components: [],
                };

                // Transfer row components, if any, to the first column
                if (columnIndex === 0)
                  column = { ...column, components: row.components };

                return column;
              }
            ),
          });
        }
      },
      canDrop: (component) => !row.columns.length,
    }),
    [onChange, row]
  );

  const updateColumn = React.useCallback(
    (updatedColumn: ColumnType) => {
      const updatedColumnIndex = row.columns.findIndex(
        (column) => column.id === updatedColumn.id
      );

      onChange({
        ...row,
        columns: [
          ...row.columns.slice(0, updatedColumnIndex),
          updatedColumn,
          ...row.columns.slice(updatedColumnIndex + 1),
        ],
      });
    },
    [row, onChange]
  );

  const updateComponent = React.useCallback(
    (updatedComponent: ComponentType) => {
      const updatedComponentIndex = row.components.findIndex(
        (component) => component.id === updatedComponent.id
      );

      onChange({
        ...row,
        components: [
          ...row.components.slice(0, updatedComponentIndex),
          updatedComponent,
          ...row.components.slice(updatedComponentIndex + 1),
        ],
      });
    },
    [row, onChange]
  );

  const removeComponent = React.useCallback(
    (component: ComponentType) => {
      const componentIndex = row.components.findIndex(
        (comp) => comp.id === component.id
      );

      onChange({
        ...row,
        components: [
          ...row.components.slice(0, componentIndex),
          ...row.components.slice(componentIndex + 1),
        ],
      });
    },
    [row, onChange]
  );

  return (
    <div ref={dropRef} className="row" style={{ marginBottom: 40 }}>
      <Panel color="primary">
        <Panel.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>Row</p>

          <Button onClick={() => onDelete(row)} size="small" color="danger">
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
          </Button>
        </Panel.Header>
        <div style={{ padding: 10 }}>
          {components.map((component) => (
            <Component
              component={component}
              key={component.id}
              onChange={updateComponent}
              onRemove={removeComponent}
            />
          ))}

          {columns.length > 0 && (
            <BulmaColumns>
              {columns.map((column) => (
                <BulmaColumns.Column key={column.id} size={column.size}>
                  <Column column={column} onChange={updateColumn} />
                </BulmaColumns.Column>
              ))}
            </BulmaColumns>
          )}
        </div>
      </Panel>
    </div>
  );
}

export default (React.memo(Row): React.ComponentType<Props>);
