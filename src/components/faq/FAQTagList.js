import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'

import { Spirit } from '../../styles/spirit-styles'
import { getTagsforPostCollection } from '../../utils/getTagsforPostCollection'

const FAQTagList = ({ data, location }) => {
    const tags = getTagsforPostCollection(data.allWordpressPost.edges, `faq`)

    // Add a default tag for "All" at first place, which
    // links back to the general faq page
    tags.unshift({
        name: `All`,
        slug: `all`,
        link: `/faq/`,
    })

    return (
            <>
                <h4 className={`${Spirit.h5} midgrey` }>FAQ topics</h4>
                <div className="mt4">
                    {tags.map((tag, i) => {
                        const dynamicClass = location.pathname === tag.link ? `bg-faq-color white fw5` : `bg-whitegrey middarkgrey hover-bg-lightgrey-l2`

                        return (
                            <Link
                                to={tag.link}
                                className={`${dynamicClass} dib pa2 pl3 pr3 br3 mb3 mr3 f8 link`}
                                key={i}
                                data-cy={`${tag.slug}-filter`}
                            >
                                {tag.name}
                            </Link>
                        )
                    })}
                </div>
            </>
    )
}
