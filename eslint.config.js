const js = require('@eslint/js');
const globals = require('globals');
const ts = require('typescript-eslint');

module.exports = [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    ignores: ['@types', 'babel.config.js', 'build', 'gatsby-*.js', 'node_modules'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    plugins: {
      import: require('eslint-plugin-import'),
      n: require('eslint-plugin-n'),
      promise: require('eslint-plugin-promise'),
      react: require('eslint-plugin-react'),
    },
    rules: {
      'import/no-anonymous-default-export': [
        'warn',
        {
          allowArray: true,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowNew: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
    },
  },
];
