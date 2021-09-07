// @flow
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// $FlowIgnore
import "./styles/index.scss";
import AppLayout from "./AppLayout";
import Builder from "./Builder";

function App(): React.Node {
  return (
    <Router>
      <div className="App">
        <AppLayout>
          <Builder />
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;
