import { graphql } from 'gatsby'

export const timeBlockQuery = graphql`
  fragment TimeBlock on kontent_item_ordinacni_hodiny___casovy_blok {
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
`;
