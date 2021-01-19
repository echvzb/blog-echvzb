import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import colorLuminance from "../components/colorLuminance"
import Breadcrumb from "../components/breadcrumb"
import PostLink from "../components/post-link";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;
  let posts = allMarkdownRemark.edges;
  const { siteMetadata } = site;
  const lang = siteMetadata.language,
    isEnUs = lang === 'en-US';

  posts = posts.filter(elem => elem.node.frontmatter.serieName === frontmatter.serieName)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} lang={siteMetadata.language} />);

  const color = "#" + frontmatter.color;

  return (
    <Layout>
      {/* <SEO frontmatter={frontmatter} siteMetadata={siteMetadata} /> */}
      <div className='serie-page' >
        <Breadcrumb pathElems={[{ path: frontmatter.path, nameLink: frontmatter.serieName }]} />
        <div className='serie-title-container' style={`background: linear-gradient(145deg, ${colorLuminance(color, 0.7)}, ${colorLuminance(color, -0.1)})`}>
          <h1 className='serie-name' style={`color: #${frontmatter.textColor};`}>{frontmatter.serieName}</h1>
        </div>
        <h2 style={`text-decoration: 0.2rem underline ${color};`}>Serie description:</h2>
        <div className='serie-description'>{frontmatter.metaDescription}</div>
        <br />
        <br />
        <br />
        <h2 style={`text-decoration: 0.2rem underline ${color};`}>Chapters:</h2>
        <div className="grids">
          {posts}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
                          site {
                          siteMetadata {
                            title
                            description
                            image
                            siteUrl
                            language
                            fbAppId
                            fbPage
                            keywords
                        }
    }
    markdownRemark(frontmatter: {path: {eq: $path }}) {
      frontmatter {
        path
        serieName
        metaDescription
        color
        textColor
      }
    }
    allMarkdownRemark(filter: { frontmatter:  { template: { eq:"blogPost" }}}) {
      edges {
        node {
          id
          frontmatter {
            chapter
            date
            path
            title
            thumbnail
            serieName
          }
        }
      }
    }
  }
`