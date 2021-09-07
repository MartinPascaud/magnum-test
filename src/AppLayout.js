// @flow
import * as React from "react";

type Props = {|
  children: React.Node,
|};

export default function AppLayout({ children }: Props): React.Node {
  return (
    <div className="app-container">
      <div className="app-content">{children}</div>
    </div>
  );
}
