import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { FAQTagList, FAQLink } from '../components/faq'
import { Layout } from '../components/common/layout'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const FAQPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `FAQ - Ghost`
    const description = `Answers to our most popular questions: billing, hosting, troubleshooting and more.`
    const imageUrl = getMetaImageUrls(`faq`)

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <Layout headerDividerStyle="shadow">
                <div className="bg-faq bb b--whitegrey">
                    <div className={`${Spirit.page.xl} pt-vw7 pt-vw1-ns pb-vw1`}>
                        <h1 className={`${Spirit.h4} white`}>Frequently Asked Questions</h1>
                    </div>
                </div>
                <div className={`${Spirit.page.xl} grid-12`}>
                    <div className="bg-white shadow-2 br4 mt5 mt10-ns pa5 pa15-ns pt10-ns pb12-ns col-12 col-8-ns">
                        {data.allWordpressWpFaq.edges.map( ( { node }) =>
                            <FAQLink key={node.id} to={`faq/` + node.slug}  post={node} />
                        )}
                    </div>
                </div>
            </Layout>
        </>
    )
}

FAQPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default FAQPage

export const pageQuery = graphql`
    query WordpressFAQQuery {
        site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        allWordpressWpFaq {
            edges {
              node {
                id
                title
                slug
                content
                excerpt
              }
            }
        }
    }
`
