import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Main = ({ data }) => {
	return (
		<div>
			Hello, {data.site.siteMetadata.title}!

			<Link to="/page-2/">Go to page 2</Link>
		</div>
	)
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Main
