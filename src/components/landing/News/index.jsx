import React from "react";
import { Link } from "gatsby";
import { Container } from "components/common";
import { Wrapper, NewsWrapper, NewsItem } from "./styles";
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
            <NewsItem
              dangerouslySetInnerHTML={{ __html: news.elements.text.value }}
            />
          ))}
          <p>
            Všechny aktuality naleznete <Link to="/aktuality">zde</Link>.
          </p>
        </NewsWrapper>
      </Wrapper>
    </>
  );
};

export default News;
