module.exports = {
    extends: [
        "eslint-config-airbnb",
        "plugin:prettier/recommended",
        "prettier/flowtype",
        "prettier/react"
    ],
    rules: {
        "import/no-absolute-path": 0,
        "react/prefer-stateless-function": 0
    }
};
