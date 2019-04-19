const gql = require('graphql-tag');

module.exports = gql`
fragment ContentPageFragment on Content {
  id
  name
  teaser(input: { useFallback: false, maxLength: null })
  body
  published
  company {
    id
    name
    canonicalPath
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src
    alt
  }
  ... on ContentVideo {
    embedCode
  }
  ... on ContentNews {
    source
    byline
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
    contributors {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
    photographers {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
  }
}
`;