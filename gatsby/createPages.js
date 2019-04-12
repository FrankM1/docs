const path = require(`path`)
const _ = require(`lodash`)
const { allMarkdownPosts } = require(`../utils/node-queries`)
const getRelatedPosts = require(`../utils/getRelatedPosts`)

module.exports.createRedirects = ({ actions }) => {
    const { createRedirect } = actions

    // The /concepts page doesn't exist, we need to redirect to
    // the first post of this section
    createRedirect({
        fromPath: `/concepts`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/concepts/introduction/`,
    })
}

module.exports.createWordPressPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryPromises = []

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(
            `
              {
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
            `)
            .then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                const items = result.data.allWordpressWpFaq.edges

                _.forEach(items, ({ node }) => {
                    // Update the existing URL field to reflect the URL in Gatsby and
                    // not in Wordpress. Also needed to link to related posts.
                    node.url = `/faq/${node.slug}/`

                    createPage({
                        path: node.url,
                        component: path.resolve(`./src/templates/wordpress/faq.js`),
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.slug,
                            relatedPosts: getRelatedPosts(node, result.data.allWordpressWpFaq.edges),
                        }
                    })
                })

                return resolve()
            })
    }))

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(
            `
              {
                allWordpressWpTutorials {
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
            `)
            .then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                const items = result.data.allWordpressWpTutorials.edges

                _.forEach(items, ({ node }) => {
                    // Update the existing URL field to reflect the URL in Gatsby and
                    // not in Wordpress. Also needed to link to related posts.
                    node.url = `/tutorials/${node.slug}/`

                    createPage({
                        path: node.url,
                        component: path.resolve(`./src/templates/wordpress/tutorial.js`),
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.slug,
                            relatedPosts: getRelatedPosts(node, result.data.allWordpressWpTutorials.edges),
                        }
                    })
                })

                return resolve()
            })
    }))


    return Promise.all(queryPromises)
}

module.exports.createMarkdownPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryPromises = []

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(allMarkdownPosts())
            .then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    const DocTemplate = path.resolve(`./src/templates/markdown/post.js`)

                    createPage({
                        path: node.fields.slug,
                        component: DocTemplate,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                            section: node.fields.section,
                        },
                    })
                    return resolve()
                })
            })
    }))

    return Promise.all(queryPromises)
}
