import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact } from 'components/landing';
import Hours from 'components/landing/Hours';
import News from 'components/landing/News';

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
                      ... on kontent_item_ordinacni_hodiny___casovy_blok {
                        id
                        elements {
                          zacatek {
                            value
                          }
                          konec {
                            value
                          }
                          poznamka {
                            value
                          }
                        }
                      }
                    }
                  }
                  ctvrtek {
                    value {
                      ... on kontent_item_ordinacni_hodiny___casovy_blok {
                        id
                        elements {
                          konec {
                            value
                          }
                          poznamka {
                            value
                          }
                          zacatek {
                            value
                          }
                        }
                      }
                    }
                  }
                  patek {
                    value {
                      ... on kontent_item_ordinacni_hodiny___casovy_blok {
                        id
                        elements {
                          konec {
                            value
                          }
                          poznamka {
                            value
                          }
                          zacatek {
                            value
                          }
                        }
                      }
                    }
                  }
                  streda {
                    value {
                      ... on kontent_item_ordinacni_hodiny___casovy_blok {
                        id
                        elements {
                          konec {
                            value
                          }
                          poznamka {
                            value
                          }
                          zacatek {
                            value
                          }
                        }
                      }
                    }
                  }
                  utery {
                    value {
                      ... on kontent_item_ordinacni_hodiny___casovy_blok {
                        id
                        elements {
                          konec {
                            value
                          }
                          poznamka {
                            value
                          }
                          zacatek {
                            value
                          }
                        }
                      }
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

  return <Layout>
    <SEO />
    <Intro />
    <News news={data.kontentItemWeb.elements.dulezite_novinky.value} />
    <Hours hours={data.kontentItemWeb.elements.ordinacni_hodiny.value[0].elements} />
    <Skills />
    <Contact />
  </Layout>
};
