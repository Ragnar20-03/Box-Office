import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return <div>
    <Switch>
      <Route exact path={"/"}>This is home page</Route>
      <Route exact path={"/1st"}>This is 1stw  page</Route>
      <Route exact path={"/2nd"}>This is 2ndw page</Route>
      <Route >This is 2ndw page</Route>
    </Switch>
    <Nav/>
  </div>
}

export default App;
