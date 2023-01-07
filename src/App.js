import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/Starred"}>
        <Starred />
      </Route>

      <Route exact path={"/show/:id"}>
        <Show/>
      </Route>
      <Route>
        <div>Not Found 404</div>
      </Route>
    </Switch>
  );
}

export default App;
