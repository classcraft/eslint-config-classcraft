module.exports = {
    extends: [
        "eslint-config-airbnb",
        "plugin:prettier/recommended",
        "plugin:flowtype/recommended",
        "prettier/react"
    ],
    parser: "babel-eslint",
    plugins: ["flowtype"],
    rules: {
        "import/no-absolute-path": 0,
        "react/prefer-stateless-function": 0,
        "flowtype/delimiter-dangle": ["error", "always-multiline"],
        "flowtype/semi": ["error", "always"],
        "flowtype/no-primitive-constructor-types": 2
    }
};
