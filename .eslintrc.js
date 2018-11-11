module.exports = {
  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb",
    "airbnb-base",
    "prettier",
  ],
  "plugins": [
    "prettier"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  // "parser": "babel-eslint",
  "rules": {
    "prettier/prettier": "error",

    // disallow use of console
    'no-console': 'off',
  }
}
