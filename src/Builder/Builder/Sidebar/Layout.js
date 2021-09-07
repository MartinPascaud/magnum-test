// @flow
import * as React from "react";
import { useDrag } from "react-dnd";

import { Tag } from "react-bulma-components";

type Props = {|
  layoutType: Array<number>,
|};

export default function SidebarLayouts({ layoutType }: Props): React.Node {
  const [{ dragging }, dragRef] = useDrag(
    () => ({
      type: "LAYOUT_TYPE",
      item: { id: JSON.stringify(layoutType), type: "LAYOUT_TYPE" },
      collect: (monitor) => ({
        dragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div style={{ opacity: dragging ? 0.5 : 1, marginBottom: 5 }} ref={dragRef}>
      <Tag color="dark" size="medium">
        {JSON.stringify(layoutType)}
      </Tag>
    </div>
  );
}
