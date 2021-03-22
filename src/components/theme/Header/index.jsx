import React, { useState } from "react";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { Wrapper, Overlay } from "./styles";

export const Header = ({ isHomePage, newsCount }) => {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar isHomePage={isHomePage} newsCount={newsCount} />
      {isHomePage && <Hamburger sidebar={sidebar} toggle={toggle} />}
      {isHomePage && <Sidebar sidebar={sidebar} toggle={toggle} />}
    </Wrapper>
  );
};
