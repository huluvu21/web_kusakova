import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact } from "components/landing";
import Hours from "components/landing/Hours";
import News from "components/landing/News";

export default () => {
  const data = useStaticQuery(graphql`
    query HoursQuery {
      kontentItemWeb(system: {codename: {eq: "web"}}) {
        elements {
          ordinacni_hodiny {
            value {
              ... on kontent_item_ordinacni_hodiny {
                id
                elements {
                  pondeli {
                    value {
                      ...TimeBlock
                    }
                  }
                  utery {
                    value {
                      ...TimeBlock
                    }
                  }
                  streda {
                    value {
                      ...TimeBlock
                    }
                  }
                  ctvrtek {
                    value {
                      ...TimeBlock
                    }
                  }
                  patek {
                    value {
                      ...TimeBlock
                    }
                  }
                }
              }
            }
          }
          dulezite_novinky {
            value {
              ... on kontent_item_novinka {
                id
                elements {
                  nadpis {
                    value
                  }
                  text {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO />
      <Intro />
      <News news={data.kontentItemWeb.elements.dulezite_novinky.value} />
      <Hours
        hours={data.kontentItemWeb.elements.ordinacni_hodiny.value[0].elements}
      />
      <Skills />
      <Contact />
    </Layout>
  );
};
