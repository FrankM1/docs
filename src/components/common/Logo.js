import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ height, theme }) => {
    const fillColor = theme === `light` ? `#FFFFFF` : `#2D3134`
    return <svg style={{ height: `${height}px`, width: `150px` }} xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M9 0H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" fill="#7ED321"/><path d="M19 10c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5z" fill="#4A90E2"/><path d="M5.894 14.553a1 1 0 0 0-1.788 0l-4 8A1 1 0 0 0 1 24h8a1 1 0 0 0 .895-1.447l-4-8z" fill="#D0021B"/><path d="M17.233 24H17a2.982 2.982 0 0 1-1.523-.416l8.107-8.107c.264.447.416.968.416 1.523v.233L17.233 24zm2.829 0L24 20.062V21c0 1.654-1.346 3-3 3h-.938zm-5.874-1.955A2.987 2.987 0 0 1 14 21v-.438L20.562 14H21c.367 0 .72.066 1.045.188l-7.857 7.857zM14 17.733V17c0-1.655 1.345-3 3-3h.733L14 17.733z" fill="#000"/></g><text font-family="Futura-Bold, Futura" font-size="27" font-weight="bold" fill="#000" transform="translate(0 -6)"><tspan x="35" y="28">Qazana</tspan></text></g></svg>
}

Logo.defaultProps = {
    height: 25,
    theme: `dark`,
}

Logo.propTypes = {
    height: PropTypes.number,
    theme: PropTypes.string,
}

export default Logo
