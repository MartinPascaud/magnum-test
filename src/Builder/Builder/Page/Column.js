// @flow
import * as React from "react";
import { useDrop } from "react-dnd";
import { nanoid } from "nanoid";

import type {
  Column as ColumnType,
  Component as ComponentType,
} from "../../types";

import { Panel } from "react-bulma-components";
import Component from "./Component";

type Props = {|
  column: ColumnType,
  onChange: (ColumnType) => void,
|};

export default function BuilderPageColumn({
  column,
  onChange,
}: Props): React.Node {
  const { components } = column;

  const [, dropRef] = useDrop(
    () => ({
      accept: "COMPONENT",
      drop: (component: ComponentType) => {
        onChange({
          ...column,
          components: [
            ...components,
            {
              ...component,
              componentId: component.id,
              id: nanoid(),
              options: {},
            },
          ],
        });
      },
    }),
    [onChange, column]
  );

  const updateComponent = React.useCallback(
    (updatedComponent: ComponentType) => {
      const updatedComponentIndex = column.components.findIndex(
        (component) => component.id === updatedComponent.id
      );

      onChange({
        ...column,
        components: [
          ...column.components.slice(0, updatedComponentIndex),
          updatedComponent,
          ...column.components.slice(updatedComponentIndex + 1),
        ],
      });
    },
    [column, onChange]
  );

  // Question 4
  // Implémenter la fonctionnalité de suppression d'un composant dans une colonne
  const removeComponent = React.useCallback(
    (removedComponent: ComponentType) => {
      const removedComponentIndex = column.components.findIndex(
        (component) => component.id === removedComponent.id
      );
      onChange({
        ...column,
        components: [
          ...column.components.slice(0, removedComponentIndex),
          ...column.components.slice(removedComponentIndex + 1, column.components.length)
        ]
      })
    },
    [column, onChange]
  )

  return (
    <div ref={dropRef}>
      <Panel size="small" color="link">
        <Panel.Header>
          <p>Column</p>
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
        </div>
      </Panel>
    </div>
  );
}
