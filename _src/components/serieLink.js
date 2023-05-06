import React from "react"
import { Link } from "gatsby"

const SerieLink = ({ serie: {frontmatter: {serieData: {serieName, featureImage}, path }}, lang }) => {
  return (
    <article className="card" >
      <Link to={path}>
          <img src={featureImage} alt={serieName + "- Featured Shot"} />
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={path} className="serie-link">
            {serieName}
          </Link>
        </h2>
      </header>
    </article>
  )
}
export default SerieLink
