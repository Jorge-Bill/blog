module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    "import/prefer-default-export": "off",
    'no-underscore-dangle': 'off'
  }
}
