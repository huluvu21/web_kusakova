import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#aktuality">Aktuality</AnchorLink>
      <AnchorLink href="#ordinacni-hodiny">Ordinační hodiny</AnchorLink>
      <AnchorLink href="#o-nas">O nás</AnchorLink>
      <AnchorLink href="#kontakt">Kontakt</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
