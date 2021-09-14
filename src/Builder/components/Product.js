// @flow
import * as React from "react";
import { Card } from "react-bulma-components";

import type { ComponentOptionSchema, RenderedComponentProps } from "../types";

export const OPTIONS: ComponentOptionSchema = {
  title: {
    label: "Titre",
    type: "string",
  },
  description: {
    label: "Description",
    type: "string",
  },
  price: {
    label: "Prix",
    type: "number",
  },
  image: {
    label: "Image source",
    type: "string",
  },
};

export const ID = "Product";

function Product({ options }: RenderedComponentProps): React.Node {
  const { title, paragraph, image, price } = options;
  return (
    <div className="product">
      <Card>
        <Card.Image src={image} />
        <Card.Header>
          <Card.Header.Title className="pl-5 pb-0">{title || "Missing title"}</Card.Header.Title>
        </Card.Header>
        <Card.Content className="pt-0">
          <div className="price pt-0">{price}&nbsp;euros</div>
        </Card.Content>
        <Card.Content>
          <p>{paragraph}</p>
        </Card.Content>
      </Card>
    </div>
  );
}

export const Component = Product;
