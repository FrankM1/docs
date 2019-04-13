module.exports.urlForMarkdown = (node, fallback) => {
    // Passing a `path` property in frontmatter will overwrite the
    // slug that we build from the folder structure

    let slug = node.frontmatter.path ? node.frontmatter.path : fallback

    return slug
}

// Adding a temp change to test things
