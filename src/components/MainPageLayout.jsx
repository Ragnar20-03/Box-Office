import React from "react";
import Nav from "./Nav";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>

    <Title title={"Box-Office"} subtitle={"Are You Looking For Movie os Actor"}/>
      <Nav />

      {children}
    </div>
  );
};

export default MainPageLayout;
