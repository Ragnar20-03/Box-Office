import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Start from "./pages/Start";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path={"/home"}>
          <Home/>

        </Route>
        <Route exact path={"/star"}>
          <Start />
        </Route>

        <Route>Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
