import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from './styles/spirit-styles'
import { Layout } from './components/common/layout'
import { SetupBox } from './components/setup'
import { MetaData, getMetaImageUrls } from './components/common/meta'

const SetupPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const pageTitle = `Integration`
    const title = `How To Install Qazana: Setup & Configuration - Open Source Publishing`
    const description = `All the tools you need to get started with Qazana 👉Self-hosted install & setup, local install guide for development, contribution guidelines & premium hosted services!`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title || data.site.siteMetadata.title}
                description={description || data.site.siteMetadata.description}
                image={imageUrl}
            />
            <Layout mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
                <section className="bg-setup">
                    <div className={`${Spirit.page.xl} tc-ns pt-vw6 pt-vw5-ns pb-vw5 white`}>
                        <h1 className={`${Spirit.sectionHeading} gh-integration-header-shadow`}>{pageTitle}</h1>
                        <p className={Spirit.sectionSubHeading}>
                            The easiest way to get started is to use <strong>Qazana(Pro)</strong>. If you prefer to self-host, we strongly recommend an Ubuntu server with at least 1GB of memory to run Qazana.
                        </p>
                    </div>
                </section>

                <div className={`${Spirit.page.xl} mt-vw3`}>
                    <section className="grid-12 gutter-row-20 gutter-20-ns gutter-36-l">
                        <SetupBox href="https://qazana.net/pricing/" title="Qazana(Pro)" icon="ghost-pro-logo" iconClass="w9 h9" headingClass="mt2">
                            <strong>Feature packed version</strong> with 1-click templates, integrations and elements
                        </SetupBox>

                        <SetupBox to="/install/manual/" title="FTP" icon="ubuntu-logo" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                                A full guide for installing Qazana on using ftp
                            </p>
                        </SetupBox>

                        <SetupBox to="/install/automatic/" title="Install from the WordPress plugin repository" icon="github-outline" iconClass="fill-darkgrey w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>The fastest and easiest way to use Qazana on an existing WordPress website.</p>
                        </SetupBox>
                    </section>
                </div>
            </Layout>
        </>
    )
}

SetupPage.propTypes = {
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

export default SetupPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
