import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/home";

import "./theme/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
