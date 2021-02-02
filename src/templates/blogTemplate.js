import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import FacebookComments from "../components/facebookComments";
import ShareButtons from "../components/shareButtons";
import Breadcrumb from "../components/breadcrumb";
import featureImageInsetBoxShadow from '../components/featureImgInsetBoxShadow';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const url = site.siteMetadata.siteUrl + frontmatter.path;
  const { siteMetadata } = site;
  const lang = siteMetadata.language,
    isEnUs = lang === 'en-US',
    shareTxt = isEnUs ? 'Share' : 'Compartir';

  let pathElems = [[frontmatter.path.slice(0, frontmatter.path.indexOf('/', 1)), frontmatter.serieData.serieName], [frontmatter.path, frontmatter.chapter + ". " + frontmatter.title]];

  pathElems = pathElems.map(elem => {
    return ({ path: elem[0], nameLink: elem[1] })
  });
  const seoData = {
    title: `${frontmatter.title} - ${frontmatter.serieData.serieName} | ${siteMetadata.title}`,
    description: frontmatter.metaDescription,
    img: frontmatter.seoImg,
    url: siteMetadata.siteUrl + frontmatter.path,
    author: frontmatter.author.authorName,
    keywords: siteMetadata.keywords
  }
  console.log(frontmatter.serieData)
  return (
    <Layout>
      <SEO seoData={seoData} />
      <Breadcrumb pathElems={pathElems} />
      <div className="post-thumbnail" style={{ backgroundImage: `url(${frontmatter.serieData.featureImage})`}}>
        <h1 className="post-title">{frontmatter.title}</h1>
        <div className='author'>
          <img src={frontmatter.author.profilePicture} alt={frontmatter.author.authorName + ' picture.'} />
          <a href={frontmatter.author.personalWebsite}>{frontmatter.author.authorName}</a>
        </div>
        <div className="post-meta">{new Date(frontmatter.date).toLocaleDateString(siteMetadata.language, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>
      <ShareButtons url={url} shareTxt={shareTxt} />
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
                            image
                            siteUrl
                            language
                            fbAppId
                            fbPage
                            keywords
                        }
    }
    markdownRemark(frontmatter: {path: {eq: $path }, template: {eq: "blogPost" } }) {
                          html
      frontmatter {
                          date(formatString: "MMMM DD, YYYY")
        path
        title
        metaDescription
        chapter
        seoImg
        author {
          authorName
          personalWebsite
          twitterUsername
          profilePicture
        }
        serieData {
          serieName
          featureImage
          color
        }
      }
    }
  }
`