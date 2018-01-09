module.exports = {
  {
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module",
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "impliedStrict": true,
        "globalReturn": false,
        "jsx": true
      }
    },
    "parser": "babel-eslint",
    "rules": {
      "indent": ["error", 2, {
        "SwitchCase": 1
      }],
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }],
      "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }],
      "jsx-quotes": [
        "error",
        "prefer-double"
      ],
      "eol-last": [
        "error",
        "always"
      ],
      "semi": [
        "error",
        "never"
      ],
      "max-len": [
        "error",
        120
      ],
      "newline-per-chained-call": [1, {
        "ignoreChainWithDepth": 2
      }]
    }
  }
}
