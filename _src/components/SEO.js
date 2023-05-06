import React from 'react';
import Helmet from 'react-helmet';

export default ({ seoData : {title, description, img, url, author, keywords }}) => {
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
                content: keywords
            }
        ]}
    />;
}
