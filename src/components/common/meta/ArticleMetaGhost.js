import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'
import _ from 'lodash'

import getAuthorProperties from './getAuthorProperties'
import ImageMeta from './ImageMeta'

const ArticleMetaGhost = ({ data, canonical, fetchAuthorData, title, overwriteDefaultImage, image }) => {
    const { wordpressPost } = data
    const { siteMetadata } = data.site

    const author = getAuthorProperties(wordpressPost.primary_author, fetchAuthorData)
    const primaryTag = { name: `General`, slug: `general` }
    const seoImage = (overwriteDefaultImage && wordpressPost.feature_image) ? wordpressPost.feature_image : image

    return (
        <>
            <Helmet>
                <title>{wordpressPost.meta_title || title || wordpressPost.title}</title>
                <meta name="description" content={wordpressPost.meta_description || wordpressPost.excerpt} />
                <link rel="canonical" href={canonical} />

                <meta property="og:site_name" content={siteMetadata.title} />
                <meta name="og:type" content="article" />
                <meta name="og:title"
                    content={
                        wordpressPost.og_title ||
                        title ||
                        wordpressPost.meta_title ||
                        wordpressPost.title
                    }
                />
                <meta name="og:description"
                    content={
                        wordpressPost.og_description ||
                        wordpressPost.excerpt ||
                        wordpressPost.meta_description
                    }
                />
                <meta property="og:url" content={canonical} />
                <meta property="article:published_time" content={wordpressPost.date} />
                <meta property="article:modified_time" content={wordpressPost.modified} />
                {publicTags.map((keyword, i) => (<meta property="article:tag" content={keyword} key={i} />))}
                <meta property="article:author" content="https://www.facebook.com/ghost/" />

                <meta name="twitter:title"
                    content={
                        wordpressPost.twitter_title ||
                        title ||
                        wordpressPost.meta_title ||
                        wordpressPost.title
                    }
                />
                <meta name="twitter:description"
                    content={
                        wordpressPost.twitter_description ||
                        wordpressPost.excerpt ||
                        wordpressPost.meta_description
                    }
                />
                <meta name="twitter:url" content={canonical} />
                {/* <meta name="twitter.label1" content="Reading time" /> */}
                {/* <meta name="twitter:data1" content="TODO: Reading time helper and replace existing `label1` data" /> */}
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={author.name} />
                <meta name="twitter:label2" content="Filed under" />
                <meta name="twitter:data2" content={primaryTag} />
                <meta name="twitter:site" content="@tryghost" />
                <meta name="twitter:creator" content="@tryghost" />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "Article",
                        "author": {
                            "@type": "Person",
                            "name": "${author.name}",
                            ${author.image ? author.sameAsArray ? `"image": "${author.image}",` : `"image": "${author.image}"` : ``}
                            ${author.sameAsArray ? `"sameAs": ${author.sameAsArray}` : ``}
                        },
                        ${publicTags.length ? `"keywords": "${_.join(publicTags, `, `)}",` : ``}
                        "headline": "${wordpressPost.meta_title || title || wordpressPost.title}",
                        "url": "${canonical}",
                        "datePublished": "${wordpressPost.date}",
                        "dateModified": "${wordpressPost.modified}",
                        "image": {
                            "@type": "ImageObject",
                            "url": "${seoImage}",
                            "width": 1000,
                            "height": 563
                        },
                        "description": "${wordpressPost.meta_description || wordpressPost.excerpt}",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${siteMetadata.siteUrl}"
                        }
                    }
                `}</script>
            </Helmet>
            <ImageMeta image={seoImage} />
        </>
    )
}

// "publisher": {
//     "@type": "Organization",
//         "name": "Qazana",
//             "logo": {
//         "@type": "ImageObject",
//             "url": "https://blog.qazana.net/favicon.png",
//                 "width": 60,
//                     "height": 60
//     }
// },

ArticleMetaGhost.defaultProps = {
    fetchAuthorData: false,
}

ArticleMetaGhost.propTypes = {
    data: PropTypes.shape({
        wordpressPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            modified: PropTypes.string.isRequired,
            excerpt: PropTypes.string.isRequired,
            meta_title: PropTypes.string,
            meta_description: PropTypes.string,
            primary_author: PropTypes.object.isRequired,
            feature_image: PropTypes.string,
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    slug: PropTypes.string,
                    visibility: PropTypes.string,
                })
            ),
            primaryTag: PropTypes.shape({
                name: PropTypes.string,
            }),
            og_title: PropTypes.string,
            og_description: PropTypes.string,
            twitter_title: PropTypes.string,
            twitter_description: PropTypes.string,
        }).isRequired,
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    canonical: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fetchAuthorData: PropTypes.bool,
    title: PropTypes.string,
    overwriteDefaultImage: PropTypes.bool,
}

export default ArticleMetaGhost
