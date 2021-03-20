import React from "react";
import { Container } from "components/common";
import { Wrapper, HoursWrapper, FlexRow, NotificationWrapper } from "./styles";
import { HeadlineWrapper } from "components/common/HeadlineWrapper";
import { TimeBlock } from "components/common/TimeBlock";

const Hours = ({ hours }) => {
  return (
    <>
      <HeadlineWrapper id="ordinacni-hodiny" as={Container}>
        <h1>Ordinační hodiny</h1>
      </HeadlineWrapper>
      <Wrapper>
        <HoursWrapper as={Container}>
          <TimeBlock name="Pondělí" blocks={hours.pondeli.value} />
          <TimeBlock name="Úterý" blocks={hours.utery.value} />
          <TimeBlock name="Středa" blocks={hours.streda.value} />
          <TimeBlock name="Čtvrtek" blocks={hours.ctvrtek.value} />
          <TimeBlock name="Pátek" blocks={hours.patek.value} />
        </HoursWrapper>
      </Wrapper>
      <Wrapper>
        <NotificationWrapper as={Container}>
          <FlexRow>
            <p>
              Odběry krve a biologického materiálu: úterý, středa, pátek{" "}
              <strong>6:30 - 7:15</strong>.
            </p>
          </FlexRow>
          <FlexRow>
            <p>
              Telefonické konzultace a dotazy nelze řešit v ordinačních hodinách
              a v době určené pro objednané.
            </p>
          </FlexRow>
          <FlexRow>
            <p>
              V době určené pro objednané budou ošetřeni pouze tito předem
              objednaní klienti. Neobjednaní klienti ošetřeni nebudou.
            </p>
          </FlexRow>
        </NotificationWrapper>
      </Wrapper>
    </>
  );
};

export default Hours;
