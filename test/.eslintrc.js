module.exports = {
    'parser': 'babel-eslint',
    plugins: ['react'],
    extends: [
        'plugin:react/recommended'
    ],
    "globals": {
        "Cypress": true,
        "cy": true,
        "window": true
    }
};
