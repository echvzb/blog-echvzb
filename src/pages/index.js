import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";
import SEO from "../components/SEO";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const { siteMetadata } = site,
    lang = siteMetadata.language,
    isEnUs = lang === 'en-US',
    title = isEnUs ? 'Latest posts ' : 'Publicaciones ';

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} lang={siteMetadata.language} />)
  
  const seoData = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    img: siteMetadata.image,
    url: siteMetadata.siteUrl,
    author: siteMetadata.title,
    keywords: siteMetadata.keywords
  }
  return (
    <Layout>
      <SEO seoData={seoData} />
      <HeroHeader />
      <h2>{title}&darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            serieData {
              featureImage
            }
          }
        }
      }
    }
  }
`
