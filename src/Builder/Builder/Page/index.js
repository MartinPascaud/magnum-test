// @flow
import * as React from "react";

import type { Layout, Row as RowType } from "../../types";

import { Button, Level } from "react-bulma-components";
import Row from "./Row";

type Props = {|
  layout: Layout,
  addRow: () => void,
  updateRow: (RowType) => void,
  deleteRow: (RowType) => void,
  reset: () => void,
|};

export default function Page({
  layout,
  addRow,
  updateRow,
  deleteRow,
  reset,
}: Props): React.Node {
  return (
    <div className="builder-page">
      {layout.map((row) => (
        <Row key={row.id} row={row} onChange={updateRow} onDelete={deleteRow} />
      ))}

      <Level>
        <Button onClick={addRow} style={{ marginTop: 10 }}>
          Add to row
        </Button>
        <Button onClick={reset}>Reset</Button>
      </Level>
    </div>
  );
}
