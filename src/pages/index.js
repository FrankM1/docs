import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Icon, Box } from '../components/common'
import { Layout } from '../components/common/layout'
import { HomeHeader, HomeAPIBox, HomeFAQLink } from '../components/home'
import { Spirit } from '../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const HomePage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `Ghost Docs`
    const description = `Get familiar with Ghost - the open source professional publishing platform.  Install guides, tutorials, API docs and FAQs.`
    const imageUrl = getMetaImageUrls()

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
            <Layout
                headerDividerStyle="shadow"
                bodyClass="bg-white"
                mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns"
                header={<HomeHeader />}
            >
                <div className="pt-vw3 home-main-box-padding-ns">
                    <div className={`${Spirit.page.xl} grid-12 gutter-row-20 gutter-40-ns`}>

                        <section className="col-12 col-6-ns flex flex-column justify-between mt4 mt0-ns">
                            <Link to="/api/" className={`${Spirit.h3} link darkgrey hover-midgrey flex-grow-0`}>API Reference</Link>

                            <Box className="mt5 tdn flex-auto flex flex-column items-stretch" elevation="1">
                                <HomeAPIBox
                                    to="/api/#frontend-sdk"
                                    title="Frontend SDKs"
                                    icon="sdks"
                                >
                                    Frameworks for working with the Ghost API to build a publication website
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/api/#rest-api"
                                    title="Rest API"
                                    icon="rest-api"
                                >
                                    A full reference of API Endpoints
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/api/#tools"
                                    title="Tools"
                                    icon="tools"
                                >
                                    Utilities to help build and manage Ghost
                                </HomeAPIBox>
                            </Box>
                        </section>

                        <section className="col-12 col-6-ns mt0-ns bt bn-ns b--whitegrey nl5 nr5 nl0-ns nr0-ns ml0-ns mr0-ns pl5 pr5 pl0-ns pr0-ns pt5 pt0-ns ">
                            <Link to="/faq/" className={`${Spirit.h3} link darkgrey hover-midgrey`}>FAQ</Link>
                            <div className="mt3 mt7-ns">
                                <HomeFAQLink to="/faq/upgrade-to-ghost-2-0/" title="Upgrade to Ghost 2.0">
                                    Ghost 2.0 was released in September 2018 and the second major upgrade since the platform launched. Learn how to upgrade
                                </HomeFAQLink>

                                <HomeFAQLink to="/faq/using-custom-domains/" title="Using Custom Domains">
                                    Map any domain you own directly to your Ghost(Pro) publication and make your site more memorable!
                                </HomeFAQLink>

                                <HomeFAQLink to="/faq/upgrading-from-deprecated-ghost-cli/" title="Upgrading from deprecated Ghost CLI">
                                    If you are using a deprecated version and need to upgrade in order to upgrade or manage your Ghost site, some extra steps may be required.
                                </HomeFAQLink>

                                <Link to="/faq/" className={`${Spirit.p} midgrey fw5 link hover-blue`}>More FAQ...</Link>
                            </div>
                        </section>
                    </div>

                </div>
            </Layout>
        </>
    )
}

HomePage.propTypes = {
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

export default HomePage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
