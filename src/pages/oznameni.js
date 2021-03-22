import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, SEO } from "components/common";
import { Intro } from "components/landing";
import AllNews from "components/news/AllNews";

export default () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allKontentItemNovinka(
        sort: { fields: system___last_modified, order: DESC }
      ) {
        nodes {
          elements {
            nadpis {
              value
            }
            priorita {
              value
            }
            text {
              value
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO />
      <Intro
        isHomePage={false}
        newsCount={data.allKontentItemNovinka.nodes.length}
      />
      <AllNews news={data.allKontentItemNovinka.nodes} />
    </Layout>
  );
};
