const { allMarkdownPosts } = require(`./node-queries`)
const { markdownQueryConfig } = require(`./query-config`)
const { fragmentTransformer } = require(`./algolia-transforms`)
const urlUtils = require(`./urls`)

const algoliaMarkdownFields = `
    objectID:id
    fields {
        slug
        section
    }
    frontmatter {
        title
        image
    }
    html
`

const mdNodeMap = ({ node }) => {
    // Flatten fields
    node.slug = node.fields.slug
    node.section = node.fields.section
    node.title = node.frontmatter.title
    // @TODO make this consistent?!
    node.url = node.slug

    delete node.frontmatter
    delete node.fields

    return node
}

const mdQueries = markdownQueryConfig.map(({ section, indexName }) => {
    return {
        query: allMarkdownPosts(section, algoliaMarkdownFields),
        indexName,
        transformer: ({ data }) => data
            .allMarkdownRemark.edges
            .map(mdNodeMap)
            .reduce(fragmentTransformer, []),

    }
})

// The REAL DEAL
module.exports = mdQueries
