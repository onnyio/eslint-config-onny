/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */


module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb'
  ],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true,
      decorators: true
    },
    sourceType: 'module'
  },
  plugins: [
    'import',
    'chai-expect',
    'chai-friendly'
  ],
  globals: {
    // declare global variables. false means read only. to set it when false use global. (ex global.data sets the data global when false)
    __BUILD_DATE__: false,
    __VERSION__: false,
    __ROOT__: false,
    __CLIENT__: false,
    __TEST__: false,
    __DEVELOPMENT__: false,
    __LOGGING__: false,
    __WIN32__: false
  },
  rules: {
    /////////////////////
    // Chai
    // https://github.com/Turbo87/eslint-plugin-chai-expect
    /////////////////////
    'no-unused-expressions': 0, // must disable the original, so we can replace it with the new one
    'chai-friendly/no-unused-expressions': 2,
    'chai-expect/no-inner-compare': 2,
    'chai-expect/missing-assertion': 2,
    'chai-expect/terminating-properties': 1,


    /////////////////////
    // Turn Off
    /////////////////////
    radix: 0,
    "function-paren-newline": 0,
    "prefer-destructuring": 0,
    // not needed in ES5 or later
    'no-else-return': 0,
    // makes the code more readable
    'import/first': [0, 'DISABLE-absolute-first'],


    /////////////////////
    // Warnings
    /////////////////////
    semi: [1, 'always'],
    'no-unused-vars': [1, { args: 'none' }],
    // allows us to retain args for API calls
    'linebreak-style': [1, 'unix'],


    /////////////////////
    // Errors
    /////////////////////
    "object-curly-newline": ["error", {
      "multiline": true,
      "consistent": true
    }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to"],
      "aspects": [ "noHref", "preferButton" ]
    }],
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    'max-len': [2, { code: 100, tabWidth: 4, ignoreComments: true }],
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 2 }],
    'new-cap': [2, { capIsNewExceptions: ['Router', 'Map', 'List'] }],
    strict: [2, 'safe'],
    'comma-dangle': [2, 'never'],
    // stupid airbnb. this should be off!
    'no-underscore-dangle': [
      2, {
        allow: [
          '__err__',
          '_id',
          '__v',
          '__INITIAL_STATE__',
          '__DEVELOPMENT__'
        ]
      }
    ],
    // deprecated rule from airbnb
    //    "import/order": ["error", {"newlines-between": "never"}],
    'import/no-extraneous-dependencies': [2, { devDependencies: false }],


    // require or disallow a space immediately following the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      // this may cause issues on linux based systems.
      'error', 'always', {
        line: {
          exceptions: ['-', '+', '/'],
          markers: ['=', '!'] // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+', '/'],
          markers: ['=', '!'], // space here to support sprockets directives
          balanced: false
        }
      }]
  }
};
