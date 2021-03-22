import React from "react";
import { Container } from "components/common";
import { Wrapper, SkillsWrapper, Details } from "./styles";

export const Skills = ({ team, profile }) => {
  return (
    <Wrapper id="o-nas">
      <SkillsWrapper as={Container}>
        <Details>
          <h1>Náš tým</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: team,
            }}
          ></div>
        </Details>
        <Details>
          <h1>Profil</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: profile,
            }}
          ></div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
