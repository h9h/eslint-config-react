module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  extends: ["prettier"],
  parser: "babel-eslint",
  prettier: {
    printWidth: 80,
    parser: "flow",
    semi: false,
    singleQuote: true
  }
};
