/*
 * @Copyright (C) 2015-2019 Onny LLC - All Rights Reserved
 *
 * This file is part of eslint-config-onny and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2019.7.22
 */


module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended'
  ],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      decorators: true
    },
    sourceType: 'module'
  },
  plugins: [
    'import',
    'jest'
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
    __LOG_LOCATION__: false,
    __WIN32__: false
  },
  rules: {
    'no-unused-expressions': 0, // must disable the original, so we can replace it with the new one


    radix: 0,
    'function-paren-newline': 0,
    'prefer-destructuring': 0,

    /**
     * not needed in ES5 or later
     */
    'no-else-return': 0,

    /**
     * This rule reports any imports that come after non-import statements.
     *
     * @see [https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md#importfirst]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md#importfirst}
     */
    'import/first': [2, 'absolute-first'],


    /*
    * https://eslint.org/docs/rules/arrow-body-style
    */
    'arrow-body-style': [0],
    // 'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],


    semi: [1, 'always'],

    /**
     * Variables that are declared and not used anywhere in the code are most likely an error
     * due to incomplete refactoring. Such variables take up space in the code
     * and can lead to confusion by readers
     * @see [https://eslint.org/docs/rules/no-unused-vars]{@link https://eslint.org/docs/rules/no-unused-vars}
     *
     * args - none - makes the code more readable, we can remove these with webpack
     */
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: false
    }],

    'linebreak-style': [1, 'unix'],


    /////////////////////
    // Errors
    /////////////////////
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true
    }],
    indent: [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1
    }],
    'max-len': [2, {
      code: 100,
      tabWidth: 4,
      ignoreComments: true
    }],

    'no-multiple-empty-lines': [2, {
      max: 2,
      maxEOF: 2
    }],
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
          '__INITIAL_STATE__'
        ]
      }
    ],
    // deprecated rule from airbnb
    //    "import/order": ["error", {"newlines-between": "never"}],

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
      }],

    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // this is prefered by airbnb, but i actually prefer named exports. makes it easier for the IDE
    // to assist me
    'import/prefer-default-export': 0
  }
};
