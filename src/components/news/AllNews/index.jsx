import React from "react";
import { Container } from "components/common";
import { Wrapper, NewsWrapper, NewsItem } from "./styles";
import { HeadlineWrapper } from "components/common/HeadlineWrapper";

const AllNews = ({ news }) => {
  console.log(JSON.stringify(news));
  return (
    <>
      <HeadlineWrapper as={Container}>
        <h1>Oznámení</h1>
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
        </NewsWrapper>
      </Wrapper>
    </>
  );
};

export default AllNews;
