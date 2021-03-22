import React from "react";
import { Link } from "gatsby";
import { Container } from "components/common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper, Brand } from "./styles";

const Navbar = ({ isHomePage, newsCount }) => {
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        Zdravotnické zařízení Kusákovi
      </Brand>
      {isHomePage && <NavbarLinks desktop newsCount={newsCount} />}
    </Wrapper>
  );
};

export default Navbar;
