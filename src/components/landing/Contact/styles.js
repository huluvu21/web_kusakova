import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6rem 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;
  }

  ul {
    margin-bottom: 2.5rem;
  }

  li {
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;
  }
`;
