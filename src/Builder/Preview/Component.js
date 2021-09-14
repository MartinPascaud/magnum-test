// @flow
import * as React from "react";

import type { Component as ComponentType } from "../types";
import COMPONENT_MAP from "../components/index";

type Props = {|
  component: ComponentType,
|};

// Question 1
// Récupérer le composant à afficher à partir des properties et la COMPONENT_MAP.

export default function Component({ component }: Props): React.Node {
  
  const comp = COMPONENT_MAP[component?.componentId]?.Component(component)

  return <div className="preview-component">{comp}</div>;
}
