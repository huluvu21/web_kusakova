import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#aktuality">Aktuality</AnchorLink>
      <AnchorLink href="#ordinacni-hodiny">Ordinační hodiny</AnchorLink>
      <AnchorLink href="#o-nas">O nás</AnchorLink>
      <AnchorLink href="#kontakt">Kontakt</AnchorLink>
    </Wrapper>
  );
};

export default NavbarLinks;
