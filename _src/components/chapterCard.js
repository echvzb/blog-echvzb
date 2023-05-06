import React from "react"
import { Link } from "gatsby"

const ChapterLink = ({ post: { frontmatter: { path, title, chapter, metaDescription, author: { authorName } } }, lang, }) => {
    return (
        <article className="card">
            <header>
                <Link to={path} className="post-link">
                    <h2 className="post-title">
                        <div className='chapter-title' >
                            {chapter + ". " + title}
                        </div>
                        <div className='chapter-author' >
                            By:{" " + authorName}
                        </div>
                        <div className='chapter-description' >
                            {metaDescription}
                        </div>
                    </h2>
                </Link>
            </header>
        </article>
    )
}
export default ChapterLink
