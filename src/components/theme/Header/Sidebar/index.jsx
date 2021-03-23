import React from "react";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

const Sidebar = ({ sidebar, toggle, newsCount }) => {
  return (
    <Wrapper active={sidebar} onClick={toggle}>
      <NavbarLinks newsCount={newsCount} />
    </Wrapper>
  );
};

export default Sidebar;
