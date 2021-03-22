import React from "react";
import { Container } from "components/common";
import { Wrapper, HoursWrapper, FlexRow, NotificationWrapper } from "./styles";
import { HeadlineWrapper } from "components/common/HeadlineWrapper";
import { TimeBlock } from "components/common/TimeBlock";

const Hours = ({ hours, text }) => {
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
          <FlexRow
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></FlexRow>
        </NotificationWrapper>
      </Wrapper>
    </>
  );
};

export default Hours;
