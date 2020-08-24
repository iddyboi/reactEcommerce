import React from "react";
import Homepage from "./pages/index";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
