module.exports = {
    "env": {
        "browser": true,
		"es6": true,
		"jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
        "indent": [
            "error",
            "tab"
		],
		"no-unused-vars": ["error", { "vars": "local", "args": "after-used", "ignoreRestSiblings": false, "varsIgnorePattern": "[sS]tyle" }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
