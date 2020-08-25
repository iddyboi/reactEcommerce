import React from "react";
import Homepage from "./pages/index";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
