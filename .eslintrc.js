module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    project: './jsconfig.json',
    sourceType: 'module',
  },
  plugins: ['import', 'prefer-arrow'],
  rules: {
    'no-use-before-define': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-void': ['error', { allowAsStatement: true }],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'no-console': 'off', // just for this project!
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
