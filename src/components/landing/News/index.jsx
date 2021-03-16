import React from "react";
import { Container } from "components/common";
import { Wrapper, NewsWrapper } from "./styles";
import { HeadlineWrapper } from "components/common/HeadlineWrapper";

const News = ({ news }) => {
  return (
    <>
      <HeadlineWrapper id="aktuality" as={Container}>
        <h1>Důležité aktuality</h1>
      </HeadlineWrapper>
      <Wrapper>
        <NewsWrapper as={Container}>
          {news.map((news) => (
            <div
              dangerouslySetInnerHTML={{ __html: news.elements.text.value }}
            />
          ))}
        </NewsWrapper>
      </Wrapper>
    </>
  );
};

export default News;
