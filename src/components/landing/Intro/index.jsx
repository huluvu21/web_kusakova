import React from "react";
import { Header } from "components/theme";
import { Container } from "components/common";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export const Intro = ({ isHomePage, newsCount }) => {
  return (
    <Wrapper>
      <Header isHomePage={isHomePage} newsCount={newsCount} />
      <IntroWrapper as={Container}>
        <Details>
          <h1>Vítejte u nás!</h1>
          <p>
            Doufáme, že tyto stránky ještě prohloubí a zkvalitní vzájemnou
            komunikaci mezi námi a Vámi, našimi pacienty.
          </p>
        </Details>
        <Thumbnail>
          <img src="images/aesculap_staff.png" alt="Aesculap" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
