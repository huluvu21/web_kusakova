import React from "react";
import { Container } from "components/common";
import { Wrapper, HoursWrapper, FlexRow } from "./styles";
import { HeadlineWrapper } from "components/common/HeadlineWrapper";

const Hours = ({ hours }) => {
  return (
    <>
      <HeadlineWrapper id="ordinacni-hodiny" as={Container}>
        <h1>Ordinační hodiny</h1>
      </HeadlineWrapper>
      <Wrapper>
        <HoursWrapper as={Container}>
          <FlexRow>
            <h2>Pondělí</h2>
            {hours.pondeli.value.map((blok) => (
              <p>
                {blok.elements.zacatek.value} - {blok.elements.konec.value} (
                {blok.elements.poznamka.value})
              </p>
            ))}
          </FlexRow>
          <FlexRow>
            <h2>Úterý</h2>
            {hours.utery.value.map((blok) => (
              <p>
                {blok.elements.zacatek.value} - {blok.elements.konec.value} (
                {blok.elements.poznamka.value})
              </p>
            ))}
          </FlexRow>
          <FlexRow>
            <h2>Středa</h2>
            {hours.streda.value.map((blok) => (
              <p>
                {blok.elements.zacatek.value} - {blok.elements.konec.value} (
                {blok.elements.poznamka.value})
              </p>
            ))}
          </FlexRow>
          <FlexRow>
            <h2>Čtvrtek</h2>
            {hours.ctvrtek.value.map((blok) => (
              <p>
                {blok.elements.zacatek.value} - {blok.elements.konec.value} (
                {blok.elements.poznamka.value})
              </p>
            ))}
          </FlexRow>
          <FlexRow>
            <h2>Pátek</h2>
            {hours.patek.value.map((blok) => (
              <p>
                {blok.elements.zacatek.value} - {blok.elements.konec.value} (
                {blok.elements.poznamka.value})
              </p>
            ))}
          </FlexRow>
        </HoursWrapper>
      </Wrapper>
    </>
  );
};

export default Hours;
