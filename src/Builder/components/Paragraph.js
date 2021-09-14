// @flow
import * as React from "react";

import type { ComponentOptionSchema, RenderedComponentProps } from "../types";

export const OPTIONS: ComponentOptionSchema = {
  content: {
    label: "Contenu",
    type: "string",
  },
};

export const ID = "paragraph";
export const CATEGORY = "content";

function Paragraph({ options }: RenderedComponentProps): React.Node {
  const { content } = options;
  return <div>{content || "Empty paragraph, no content provided"}</div>;
}

export const Component = Paragraph;
