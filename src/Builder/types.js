// @flow
import * as React from "react";
export type Layout = Array<Row>;

export type Row = {|
  id: string,
  columns: Array<Column>,
  components: Array<Component>,
  // Note: In a row, columns and components cannot have elements at the same time.
  // Either row has an array of columns or an array of components
|};

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type Column = {|
  id: string,
  size: ColumnSize,
  components: Array<Component>,
|};

export type ComponentProperty = string;
export type ComponentPropertySchema = {|
  label: string,
  type: "string" | "number",
|};

export type ComponentOptionSchema = {
  [key: ComponentProperty]: ComponentPropertySchema,
}; // Depends on the component

export type ComponentOptions = { [key: ComponentProperty]: any }; // Depends on the component

export type ComponentId = string;

export type Component = {|
  id: ComponentId,
  componentId: string,
  options: ComponentOptions,
|};

export type RenderedComponentProps = {|
  options: ComponentOptions,
|};

export type ComponentMap = {
  [key: ComponentId]: {|
    Component: React.ComponentType<RenderedComponentProps>,
    options: ComponentOptionSchema,
    id: ComponentId,
  |},
};
