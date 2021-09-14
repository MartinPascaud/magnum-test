// @flow
import * as React from "react";

import type { ComponentOptionSchema, RenderedComponentProps } from "../types";

export const OPTIONS: ComponentOptionSchema = {
  src: {
    label: "Source de l'image (URL)",
    type: "string",
  },
};

export const ID = "Image";
export const CATEGORY = "Content";

function Image({ options }: RenderedComponentProps): React.Node {
  const { src } = options;
  if (!src) return "Empty image, no source provided";
  return <img src={src} alt="provided" />;
}

export const Component = Image;
