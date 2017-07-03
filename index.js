module.exports = {
    extends: "eslint-config-airbnb",
    rules: {
        "import/no-absolute-path": 0,
        indent: [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-tabs": 0,
        quotes: [
            "error",
            "double"
        ],
        semi: [
            "error",
            "always"
        ]
    }
};