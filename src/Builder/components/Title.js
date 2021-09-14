// @flow
import * as React from "react";

import type { RenderedComponentProps } from "../types";

import { Heading } from "react-bulma-components";

export const OPTIONS = {
  content: {
    label: "Contenu",
    type: "string",
  },
};

export const ID = "Title";
export const CATEGORY = "Contenu";

function Title({ options }: RenderedComponentProps): React.Node {
  const { content } = options;
  return (
    <Heading size={5}>{content || "Empty title, no content provided"}</Heading>
  );
}

export const Component = Title;
