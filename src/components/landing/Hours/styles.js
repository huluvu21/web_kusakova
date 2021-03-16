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

  p {
    margin-bottom: 2.5rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    strong {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#707070')};
    }
  }
`;
