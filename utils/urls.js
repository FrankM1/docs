module.exports.urlForMarkdown = (node, fallback) => {
    // Passing a `path` property in frontmatter will overwrite the
    // slug that we build from the folder structure

    let slug = node.frontmatter.path ? node.frontmatter.path : fallback

    // Remove the version slug from the latest API version docs
    // TODO: use env config to add latest API version
    if (slug.match(/\/api\/v2\/\S*/i)) {
        slug = slug.replace(/\/v2/, ``)
    }

    return slug
}

// Adding a temp change to test things
