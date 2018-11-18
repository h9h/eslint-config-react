module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        parser: 'flow',
        semi: false,
        singleQuote: true,
      },

    ],
  },
  extends: ['prettier'],
  parser: 'babel-eslint',
}
