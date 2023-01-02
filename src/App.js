import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"}>
          S This is home page
        </Route>

        <Route exact path="/aaaa">
          This is AAAA home page
        </Route>

        <Route exact path={"/start"}>
          This isStart Page
        </Route>

        <Route>THis is errrorororo</Route>
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
