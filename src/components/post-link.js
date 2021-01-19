import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post, lang }) => {
  console.log(post)
  return (
    <article className="card " >
      <Link to={post.frontmatter.path}>
          <img src={post.frontmatter.serieData.featureImage} alt={post.frontmatter.title + "- Featured Shot"} />
      </Link>
      <header>
        <h2 className="post-title" >
          <Link to={post.frontmatter.path} className="post-link">
            {post.frontmatter.chapter !== undefined ? post.frontmatter.chapter + ". " : ""}{post.frontmatter.title}
          </Link>
        </h2>
        <div className="post-meta">{new Date(post.frontmatter.date).toLocaleDateString(lang , { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </header>
    </article>
  )
}
export default PostLink
