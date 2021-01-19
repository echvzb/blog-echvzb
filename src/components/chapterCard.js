import React from "react"
import { Link } from "gatsby"

const ChapterLink = ({ post: { frontmatter: { path, title, chapter, metaDescription, author: { authorName } } }, lang, firstColor, secondColor, textColor }) => {
    const authorColor = textColor === '#fff' ? "#DFDFDF" : "#202020";
    const descriptionColor = textColor === '#fff' ? "#EFEFEF" : "#101010";

    return (
        <article className="card" style={`background: linear-gradient(145deg, ${firstColor}, ${secondColor}) !important;`}>
            <header>
                <Link to={path} className="serie-link">
                    <h2 className="post-title">
                        <div className='chapter-title' style={`color: ${textColor}`}>
                            {chapter + ". " + title}
                        </div>
                        <div className='chapter-author' style={`color: ${authorColor}`}>
                            By:{" " + authorName}
                        </div>
                        <div className='chapter-description' style={`color: ${descriptionColor}`}>
                            {metaDescription}
                        </div>
                    </h2>
                </Link>
            </header>
        </article>
    )
}
export default ChapterLink
