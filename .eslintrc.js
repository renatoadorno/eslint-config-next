module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:react/jsx-runtime"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "off"
    ],
    "no-param-reassign": [
      "off"
    ],
    "consistent-return": [
      "off"
    ],
    "no-undef": [
      "off"
    ],
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreComments": true,
        "ignoreUrls": true
      }
    ],
    "max-params": [
      "error",
      4
    ],
    "max-lines": [
      "error",
      250
    ],
    "max-lines-per-function": [
      "off"
    ],
    "complexity": [
      "error",
      15
    ],
    "object-curly-newline": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "off"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".tsx",
          ".ts"
        ]
      }
    ],
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": false
      }
    ],
    "react/no-array-index-key": [
      "off"
    ],
    "react/destructuring-assignment": [
      "error",
      "always"
    ],
    "react/forbid-component-props": [
      "error"
    ],
    "react/forbid-prop-types": [
      "error"
    ],
    "react/no-did-mount-set-state": [
      "error"
    ],
    "react/no-did-update-set-state": [
      "error"
    ],
    "react/jsx-props-no-spreading": [
      "off"
    ],
    "react/no-multi-comp": [
      "error",
      {
        "ignoreStateless": false
      }
    ],
    "react/prefer-stateless-function": [
      "off"
    ],
    "react/no-access-state-in-setstate": [
      "error"
    ],
    "react/no-redundant-should-component-update": [
      "error"
    ],
    "react/no-this-in-sfc": [
      "error"
    ],
    "react/no-typos": [
      "error"
    ],
    "react/no-unsafe": [
      "error"
    ],
    "react/no-unused-state": [
      "error"
    ],
    "react/no-will-update-set-state": [
      "error"
    ],
    "react/prefer-es6-class": [
      "error",
      "always"
    ],
    "react/self-closing-comp": [
      "error"
    ],
    "react/state-in-constructor": [
      "off"
    ],
    "react/void-dom-elements-no-children": [
      "error"
    ],
    "react/jsx-closing-bracket-location": [
      "error"
    ],
    "react/jsx-closing-tag-location": [
      "error"
    ],
    "react/jsx-curly-newline": [
      "error"
    ],
    "react/jsx-fragments": [
      "error"
    ],
    "react/jsx-no-useless-fragment": [
      "error"
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "always"
      }
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline"
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        "checkAttributes": true,
        "indentLogicalExpressions": true
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-key": [
      "error"
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens",
        "assignment": "parens",
        "return": "parens",
        "arrow": "parens",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ]
  }
}
