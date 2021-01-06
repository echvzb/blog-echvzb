import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import FacebookComments from "../components/facebookComments";
import ShareButtons from "../components/shareButtons";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const url = site.siteMetadata.siteUrl + frontmatter.path;
  const { siteMetadata } = site;
  const lang = siteMetadata.language,
    isEnUs = lang == 'en-US',
    shareTxt = isEnUs ? 'Share' : 'Compartir';

  return (
    <Layout>
      <SEO frontmatter={frontmatter} siteMetadata={siteMetadata} />
      {!frontmatter.thumbnail && (
        <div className="post-thumbnail">
          <h1 className="post-title">{frontmatter.title}</h1>
          <div className="post-meta">{new Date(frontmatter.date).toLocaleDateString("es-MX", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      )}
      {!!frontmatter.thumbnail && (
        <div className="post-thumbnail" style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}>
          <h1 className="post-title">{frontmatter.title}</h1>
          <div className='author'>
            <img src='/assets/author.jpg' alt={siteMetadata.author + ' picture.'} />
            <a href={siteMetadata.personalWebsiteUrl}>{siteMetadata.author}</a>
          </div>
          <div className="post-meta">{new Date(frontmatter.date).toLocaleDateString(siteMetadata.language, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      )}
      <ShareButtons url={url} shareTxt={shareTxt}/>
      <div className="blog-post-container">
        <article className="post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
      <FacebookComments url={url} fbAppId={siteMetadata.fbAppId} fbPage={siteMetadata.fbPage} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
                          site {
                          siteMetadata {
                            title
                            description
                            author
                            image
                            siteUrl
                            language
                            personalWebsiteUrl
                            fbAppId
                            fbPage
                            keywords
                        }
    }
    markdownRemark(frontmatter: {path: {eq: $path } }) {
                          html
      frontmatter {
                          date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`