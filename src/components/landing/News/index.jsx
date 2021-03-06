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
          {news.map((newsItem, index) => (
            <>
              <h2>{newsItem.elements.nadpis.value}</h2>
              <NewsItem
                dangerouslySetInnerHTML={{
                  __html: newsItem.elements.text.value,
                }}
              />
              {news.length - 1 > index && <hr />}
            </>
          ))}
          <p>
            Všechna oznámení naleznete <Link to="/oznameni">zde</Link>.
          </p>
        </NewsWrapper>
      </Wrapper>
    </>
  );
};

export default News;
