// @flow
import * as React from "react";

import type { Row as RowType } from "../types";

import { Columns } from "react-bulma-components";
import Column from "./Column";
import Component from "./Component";

type Props = {|
  row: RowType,
|};

export default function Row({ row }: Props): React.Node {
  return (
    <div className="preview-row">
      {row.columns.length > 0 ? (
        <Columns>
          {row.columns.map((column) => {
            const { size } = column;

            return (
              <Columns.Column size={size} key={column.id}>
                <Column column={column} />
              </Columns.Column>
            );
          })}
        </Columns>
      ) : (
        row.components.map((component) => (
          <Component key={component.id} component={component} />
        ))
      )}
    </div>
  );
}
