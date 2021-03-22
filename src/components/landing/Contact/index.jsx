import React from "react";
import { Container } from "components/common";
import { Wrapper, Details } from "./styles";

export const Contact = ({ howToContactUs, address, addressInfo }) => (
  <Wrapper as={Container} id="kontakt">
    <Details>
      <h1>Jak nás kontaktovat</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: howToContactUs,
        }}
      ></div>
    </Details>
    <Details>
      <h1>Kde nás najdete</h1>
      <p>{address}</p>
      <iframe
        style={{ border: "none" }}
        src="https://frame.mapy.cz/s/makesomago"
        width="100%"
        height="466"
        frameborder="0"
        title="Mapa"
      ></iframe>
      <div
        dangerouslySetInnerHTML={{
          __html: addressInfo,
        }}
      ></div>
    </Details>
  </Wrapper>
);
