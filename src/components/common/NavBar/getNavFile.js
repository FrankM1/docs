import PropTypes from 'prop-types'

const getNavFile = (menu) => {
    try {
        // declare as var here, so it's accessible outside of the try scope
        var [sidebarfile] = require(`../../../data/navigation/${menu}.yaml`)
    } catch (e) {
        // TODO: make clear error handling here
        throw e
    }

    return sidebarfile
}

getNavFile.propTypes = {
    menu: PropTypes.string.isRequired,
}

export default getNavFile
