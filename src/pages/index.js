import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact } from "components/landing";
import Hours from "components/landing/Hours";
import News from "components/landing/News";

export default () => {
  const data = useStaticQuery(graphql`
    query HoursQuery {
      kontentItemWeb(system: { codename: { eq: "web" } }) {
        elements {
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
          ordinacni_hodiny_text {
            value
          }
          nas_tym {
            value
          }
          profil {
            value
          }
          jak_nas_kontaktovat {
            value
          }
          kontakt_adresa {
            value
          }
          kontakt_informace {
            value
          }
        }
      }
    }
  `);

  const homePage = data.kontentItemWeb.elements;

  return (
    <Layout>
      <SEO />
      <Intro
        isHomePage={true}
        newsCount={homePage.dulezite_novinky.value.length}
      />
      {homePage.dulezite_novinky.value.length !== 0 && (
        <News news={homePage.dulezite_novinky.value} />
      )}
      <Hours
        hours={homePage.ordinacni_hodiny.value[0].elements}
        text={homePage.ordinacni_hodiny_text.value}
      />
      <Skills team={homePage.nas_tym.value} profile={homePage.profil.value} />
      <Contact
        howToContactUs={homePage.jak_nas_kontaktovat.value}
        address={homePage.kontakt_adresa.value}
        addressInfo={homePage.kontakt_informace.value}
      />
    </Layout>
  );
};
