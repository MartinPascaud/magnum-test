// @flow
import { fromPairs } from "lodash";

import type { ComponentMap } from "../types";

import * as Paragraph from "./Paragraph";
import * as Title from "./Title";
import * as Image from "./Image";
import * as Product from "./Product";

const COMPONENT_MAP: ComponentMap = fromPairs(
  [Paragraph, Title, Image, Product].map((compModule) => [
    compModule.ID,
    {
      Component: compModule.Component,
      options: compModule.OPTIONS,
      id: compModule.ID,
    },
  ])
);

export default COMPONENT_MAP;
