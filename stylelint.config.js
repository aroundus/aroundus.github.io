module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': null,
    'color-function-notation': 'modern',
    'scss/at-rule-no-unknown': true,
  },
};
