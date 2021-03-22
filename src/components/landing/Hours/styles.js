import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HoursWrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 22% 39% 39%;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }
  }
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  @media (max-width: 960px) {
    align-items: center;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }
  }
`;
