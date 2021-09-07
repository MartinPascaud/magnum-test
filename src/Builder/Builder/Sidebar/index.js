// @flow
import * as React from "react";

import COMPONENT_MAP from "../../components";

import { Heading } from "react-bulma-components";
import SidebarComponent from "./Component";
import SidebarLayout from "./Layout";

const LAYOUT_TYPES = [
  [6, 6],
  [4, 4, 4],
  [3, 3, 3, 3],
  [3, 6, 3],
];

export default function Sidebar(): React.Node {
  return (
    <div className="sidebar">
      <div style={{ marginBottom: 50 }}>
        <Heading weight="light" size={4} style={{ marginBottom: 10 }}>
          Composants
        </Heading>
        {Object.keys(COMPONENT_MAP).map((componentId) => (
          <SidebarComponent key={componentId} componentId={componentId} />
        ))}
      </div>

      <div>
        <Heading size={4} weight="light" style={{ marginBottom: 10 }}>
          Options de layout
        </Heading>
        {LAYOUT_TYPES.map((layoutType) => (
          <SidebarLayout
            key={JSON.stringify(layoutType)}
            layoutType={layoutType}
          />
        ))}
      </div>
    </div>
  );
}
