const path = require(`path`)
const _ = require(`lodash`)
const { allMarkdownPosts } = require(`../utils/node-queries`)

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
