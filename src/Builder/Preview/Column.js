// @flow
import * as React from "react";

import type { Column as ColumnType } from "../types";

import Component from "./Component";

type Props = {|
  column: ColumnType,
|};

export default function Column({ column }: Props): React.Node {
  const { components } = column;

  return (
    <div className="preview-column">
      {components.map((component) => (
        <Component key={component.id} component={component} />
      ))}
    </div>
  );
}
