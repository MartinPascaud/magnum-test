// @flow
import * as React from "react";

import type { Layout } from "../types";

import Row from "./Row";

type Props = {|
  layout: Layout,
|};

export default function Preview({ layout }: Props): React.Node {
  return (
    <div className="preview">
      {layout.map((row) => (
        <Row row={row} key={row.id} />
      ))}
    </div>
  );
}
