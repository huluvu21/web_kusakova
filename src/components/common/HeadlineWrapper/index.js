import styled from "styled-components";

export const HeadlineWrapper = styled.div`
  padding: 4rem 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
