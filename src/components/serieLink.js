import React from "react"
import { Link } from "gatsby"
import colorLuminance from './colorLuminance';

const SerieLink = ({ serie: {frontmatter}, lang }) => {
  const color = frontmatter.color ? `#${frontmatter.color}` : null;
  return (
    <article className="card" style={color ? `background: linear-gradient(145deg, ${colorLuminance(color, 0.07)}, ${colorLuminance(color, -0.1)}) !important;` : ""}>
      <Link to={frontmatter.path} >
        {!!frontmatter.thumbnail && (
          <img src={frontmatter.thumbnail} alt={frontmatter.title + "- Featured Shot"} />
        )}
      </Link>
      <header>
        <h2 className="post-title" style={color ? `color: #${frontmatter.textColor}` : ""}>
          <Link to={frontmatter.path} className="serie-link">
            {frontmatter.serieName}
          </Link>
        </h2>
      </header>
    </article>
  )
}
export default SerieLink
