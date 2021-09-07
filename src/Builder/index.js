// @flow
import * as React from "react";
import {
  matchPath,
  useLocation,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import type { Layout } from "./types";

import { Tabs } from "react-bulma-components";
import Preview from "./Preview";
import PageBuilder from "./Builder";

export default function Builder(): React.Node {
  const location = useLocation();
  // $FlowIgnore
  const storedLayout = JSON.parse(localStorage.getItem("layout")) || [];

  const [layout, setLayout] = React.useState<Layout>(
    storedLayout.length > 0 ? storedLayout : DEFAULT_LAYOUT
  );

  React.useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  return (
    <>
      <Tabs align="center" size="medium" type="toggle-rounded">
        <Tabs.Tab
          active={matchPath(location.pathname, "/builder")}
          renderAs={() => (
            <NavLink to="/builder" activeClassName="is-active">
              Builder
            </NavLink>
          )}
        />
        <Tabs.Tab
          active={matchPath(location.pathname, "/preview")}
          renderAs={() => (
            <NavLink to="/preview" activeClassName="is-active">
              Preview
            </NavLink>
          )}
        />
      </Tabs>

      <Switch>
        <Route path="/builder">
          <PageBuilder layout={layout} setLayout={setLayout} />
        </Route>

        <Route path="/preview">
          <Preview layout={layout} />
        </Route>

        <Route>
          <Redirect to="/builder" />
        </Route>
      </Switch>
    </>
  );
}

const DEFAULT_LAYOUT: Layout = [
  {
    id: "JbRwk4KOGBxj4PiHPflQt",
    components: [],
    columns: [
      {
        id: "VKDbV1U72kiwD6b8gWSbf",
        size: 3,
        components: [
          {
            id: "0S9zScVTQQHuVKJZiDH27",
            componentId: "Title",
            options: { content: "Lorem ipsum" },
          },
        ],
      },
      {
        id: "zLisKqVEWOIs44T0bDfqE",
        size: 3,
        components: [
          {
            id: "3QWYMPJuLHzP2wMux8Mo-",
            componentId: "Title",
            options: { content: "Why do we use it?" },
          },
        ],
      },
      {
        id: "BJ-W92Sp-byS_3M18bm2L",
        size: 3,
        components: [
          {
            id: "Sw0WskHkPyUQJpebLrllW",
            componentId: "Image",
            options: { src: "https://i.stack.imgur.com/N4TSy.jpg" },
          },
        ],
      },
      {
        id: "ONsNuzx2exvj0jWA-KmsZ",
        size: 3,
        components: [
          {
            id: "jZjF-EgarvaAJrzlfm0LY",
            componentId: "Title",
            options: { content: "Where does it come from?" },
          },
        ],
      },
    ],
  },
  {
    id: "zPuvkOL2tVCyyPgheg90-",
    components: [],
    columns: [
      {
        id: "0Gcf88eeaihITTjUW4nh2",
        size: 6,
        components: [
          {
            id: "Nlzj6Un85lhFk9JLKov9A",
            componentId: "paragraph",
            options: {
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
          },
        ],
      },
      { id: "WwgaUnkWwVov2_bZLvvav", size: 6, components: [] },
    ],
  },
];
