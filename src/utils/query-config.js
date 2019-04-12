const wordpressQueryConfig = [
    {
        tag: `hash-faq`,
        section: `faq`,
        niceName: `FAQ`,
        template: `./src/templates/wordpress/faq.js`,
        tagsTemplate: `./src/templates/wordpress/faq-archive.js`,
        indexName: `faq`,
    },
    {
        tag: `hash-tutorial`,
        section: `tutorials`,
        niceName: `Tutorials`,
        template: `./src/templates/wordpress/tutorial.js`,
        tagsTemplate: `./src/templates/wordpress/tutorial-archive.js`,
        indexName: `tutorial`,
    },
    {
        tag: `hash-integration`,
        section: `integrations`,
        niceName: `Integrations`,
        template: `./src/templates/wordpress/integration.js`,
        tagsTemplate: `./src/templates/wordpress/integration-archive.js`,
        indexName: `integration`,
    },
]

const markdownQueryConfig = [
    {
        section: `concepts`,
        indexName: `concept`,
        niceName: `Concepts`,
    },
    {
        section: `setup`,
        indexName: `setup`,
        niceName: `Setup Guide`,
    },
    {
        section: `api`,
        indexName: `api`,
        niceName: `API Reference`,
    },
]

module.exports = {
    defaultMarkdownSection: `setup`,
    markdownQueryConfig,
    wordpressQueryConfig,
    searchConfig: markdownQueryConfig
        .concat(wordpressQueryConfig)
        .reduce((acc, { indexName, niceName }) => {
            acc[indexName] = niceName
            return acc
        }, {}),
}
