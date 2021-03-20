import styled from "styled-components";
import overlayIllustration from "assets/illustrations/overlay.svg";

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 6rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  p {
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.2;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;
