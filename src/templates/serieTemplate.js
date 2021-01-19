import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import colorLuminance from "../components/colorLuminance"
import Breadcrumb from "../components/breadcrumb"
import ChapterLink from "../components/chapterCard";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;
  let posts = allMarkdownRemark.edges;
  const { siteMetadata } = site;
  const lang = siteMetadata.language,
    isEnUs = lang === 'en-US',
    text = isEnUs ? { firstTitle: "Series description", secondTitle: "Entries" } : { firstTitle: "Descripción de serie", secondTitle: "Entradas" };

  const { serieData: { color, textColor, serieName, featureImage }, metaDescription, path } = frontmatter;

  posts = posts.filter(elem => elem.node.frontmatter.serieData.serieName === serieName)
    .map(edge => <ChapterLink key={edge.node.id} post={edge.node} lang={siteMetadata.language} firstColor={colorLuminance(color, 0.07)} secondColor={colorLuminance(color, -0.1)} textColor={textColor} />);
  
  
  const seoData = {
    title: `${serieName} | ${siteMetadata.title}`,
    description: metaDescription,
    img: siteMetadata.image,
    url: siteMetadata.siteUrl + path,
    author: siteMetadata.title,
    keywords: siteMetadata.keywords
  }
  const styleHeadings = {
    textDecoration: `0.2rem underline ${color}`
  }
  return (
    <Layout>
      <SEO seoData={seoData} />
      <div className='serie-page' >
        <Breadcrumb pathElems={[{ path: path, nameLink: serieName }]} />
        <div className='serie-feature-img' style={{backgroundImage:`url("${featureImage}")`, backgroundColor:color}}>
          <h1 className='serie-name' style={{color: textColor}}>{serieName}</h1>
        </div>
        <h2 style={styleHeadings}>{text.firstTitle}:</h2>
        <div className='serie-description'>{metaDescription}</div>
        <br />
        <br />
        <br />
        <h2 style={styleHeadings}>{text.secondTitle}:</h2>
        <div className="grids two-grids">
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
                            siteUrl
                            language
                            fbAppId
                            fbPage
                            keywords
                            image
                        }
    }
    markdownRemark(frontmatter: {path: {eq: $path }}) {
      frontmatter {
        path
        metaDescription
        serieData {
          serieName
          color
          textColor
          featureImage
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter:  { template: { eq:"blogPost" }}}) {
      edges {
        node {
          id
          frontmatter {
            chapter
            path
            title
            metaDescription
            serieData {
              serieName
            }
            author {
              authorName
            }
          }
        }
      }
    }
  }
`