// @flow
import * as React from "react";
import { useDrag } from "react-dnd";

import type { ComponentId } from "../../types";

import { Tag } from "react-bulma-components";

type Props = {|
  componentId: ComponentId,
|};

export default function SidebarComponent({ componentId }: Props): React.Node {
  const [{ dragging }, dragRef] = useDrag(
    () => ({
      type: "COMPONENT",
      item: { id: componentId, type: "COMPONENT" },
      collect: (monitor) => ({
        dragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div style={{ opacity: dragging ? 0.5 : 1, marginBottom: 5 }} ref={dragRef}>
      <Tag color="primary" size="medium">
        {componentId}
      </Tag>
    </div>
  );
}
