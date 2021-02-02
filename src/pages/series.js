import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SerieLink from "../components/serieLink";
import SEO from "../components/SEO";

const SeriesPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const { siteMetadata } = site;

  const Series = edges
    .map(edge => <SerieLink key={edge.node.id} serie={edge.node} />)

  const seoData = {
    title: `Series | ${siteMetadata.title}`,
    description: siteMetadata.description,
    img: siteMetadata.image,
    url: siteMetadata.siteUrl + "/series",
    author: siteMetadata.title,
    keywords: siteMetadata.keywords
  }
  return (
    <Layout>

      <SEO seoData={seoData} />
      <div className='series-page'>
        <h1>Series</h1>
        <div className="grids">
          {Series}
        </div>
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
            serieData {
              serieName
              color
              textColor
              featureImage
            }
          }
        }
      }
    }
  }
`
