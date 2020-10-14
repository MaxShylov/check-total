const prettierOptions = require('./.prettierrc.js')

module.exports = {
  extends: ['airbnb', 'react-app', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    camelcase: [0, { allow: ['^UNSAFE_'] }],
    'prettier/prettier': [1, prettierOptions],
    'react/jsx-sort-props': [1, { callbacksLast: true }],
    'react/sort-prop-types': [1, { callbacksLast: true }],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': [2, { allowArrowFunctions: false, allowBind: false }],
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [1, { aspects: ['invalidHref'] }],
    'no-duplicate-imports': 2,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/button-has-type': 1,
    'react/jsx-curly-brace-presence': 1,
    'react/no-this-in-sfc': 1,
    'react/sort-comp': 1,
    'react/no-access-state-in-setstate': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/no-deprecated': 1,
    'react/destructuring-assignment': 1,
    'react/jsx-fragments': 1,
    'lines-between-class-members': 1,
    'prefer-object-spread': 1,
    'no-else-return': 1,
    'prefer-const': 2,
    'no-console': 1,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
