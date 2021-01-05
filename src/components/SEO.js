import React from 'react';
import  Helmet  from 'react-helmet';

export default ({ frontmatter, siteMetadata}) => {
    const title = frontmatter ? frontmatter.title + ' | echvzb blog' : siteMetadata.title; 
    const description = frontmatter ? frontmatter.metaDescription : siteMetadata.description;
    const img = siteMetadata.siteUrl + (frontmatter ? frontmatter.thumbnail.slice(0, frontmatter.thumbnail.length - 4) + '-seo.jpg' : siteMetadata.image);
    const url = siteMetadata.siteUrl + (frontmatter ? frontmatter.path : "");
    const author = siteMetadata.author;
    const keywords = ['Ciencias de la computación', 'Informática','Blog', 'Tecnología', 'Programación', 'Desarrollo web', 'Inteligencia artificial', 'Javascript', 'HTML', 'React', 'Backend', 'Frontend', 'CSS', 'Python'];
    
    return <Helmet
        title={title}
        meta={[
            {
                name: `description`,
                content: description
            },
            {
                property:`og:title`,
                content: title
            },
            {
                property: `og:description`,
                content: description
            },
            {
                property: `og:type`,
                content: `website`
            },
            {
                property: `og:image`,
                content: img
            },
            {
                property: `og:url`,
                content: url
            },
            {
                name: `twitter:card`,
                content: `summary_large_image`
            },
            {
                name: `twitter:creator`,
                content: author
            },
            {
                name:`twitter:title`,
                content: title
            },
            {
                name: `twitter:description`,
                content: description
            },
            {
                name: `twitter:image`,
                content: img
            },
            {
                name:'keywords',
                content: keywords.join(', ')
            }
        ]}
    />;
}
