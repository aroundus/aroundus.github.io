const js = require('@eslint/js');
const globals = require('globals');
const ts = require('typescript-eslint');

/** @type {import('typescript-eslint').Config} */
module.exports = [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
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
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'after' },
            { pattern: '@/**', group: 'external', position: 'after' },
            { pattern: './**/*.*', group: 'unknown', position: 'after' },
            { pattern: '**/*.css', group: 'unknown', position: 'after' },
            { pattern: '**/*.scss', group: 'unknown', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
        },
      ],
      'react/jsx-sort-props': ['error', { callbacksLast: true }],
    },
  },
  { ignores: ['@types', '*.config.js', 'build', 'gatsby-*.js', 'node_modules'] },
];
