import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SerieLink from "../components/serieLink";
import HeroHeader from "../components/heroHeader";
import SEO from "../components/SEO";

const SeriesPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const { siteMetadata } = site,
  lang = siteMetadata.language,
  isEnUs = lang === 'en-US'; 

  const Series = edges
    .map(edge => <SerieLink key={edge.node.id} serie={edge.node} />)

  return (
    <Layout>
      <SEO siteMetadata = {siteMetadata}/>
      <h2>Series</h2>
      <div className="grids">
        {Series}
      </div>
    </Layout>
  )
}

export default SeriesPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
        language
        keywords
      }
    }
    allMarkdownRemark(filter: { frontmatter:  { template: { eq:"serie" }}}) {
      edges {
        node {
          id
          frontmatter {
            path
            serieName
            color
            textColor
          }
        }
      }
    }
  }
`
