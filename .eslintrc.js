
module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 0,
    'react/forbid-prop-types': ['off', { forbid: [] }],
    'global-require': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/no-unescaped-entities': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*/__tests__/**/*', '**/*/__mocks__/**/*', '**/webpack.*.js']
    }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.common.js'
      }
    }
  }
}