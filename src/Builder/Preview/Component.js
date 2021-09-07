// @flow
import * as React from "react";

import type { Component as ComponentType } from "../types";

type Props = {|
  component: ComponentType,
|};

// Question 1
// Récupérer le composant à afficher à partir des properties et la COMPONENT_MAP.

export default function Component({ component }: Props): React.Node {

  const { componentId, options } = component;
  const { content, src } = options;

  return (
    <div className="preview-component">
      <div className={componentId === "Title" ? "has-text-weight-semibold" : null}>
        {options.content}
      </div>
      {src && <img src={src} alt="Preview" />}
    </div>
    )
}
