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
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
