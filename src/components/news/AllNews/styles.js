import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const NewsWrapper = styled.div`
  padding: 1rem 0;

  p {
    margin-bottom: 1rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }
  }
`;

export const NewsItem = styled.div`
  padding: 1rem 0;

  p {
    margin-bottom: 1rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }
  }
`;
