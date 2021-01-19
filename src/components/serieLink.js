import React from "react"
import { Link } from "gatsby"
import colorLuminance from './colorLuminance';

const SerieLink = ({ serie: {frontmatter: {serieData: {serieName, color, textColor}, path }}, lang }) => {
  return (
    <article className="card" style={{background: `linear-gradient(145deg, ${colorLuminance(color, 0.07)}, ${colorLuminance(color, -0.1)})`}}>
      <header>
        <h2 className="post-title" style={{color: textColor}}>
          <Link to={path} className="serie-link">
            {serieName}
          </Link>
        </h2>
      </header>
    </article>
  )
}
export default SerieLink
