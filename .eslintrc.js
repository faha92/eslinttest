/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@microsoft/sdl"],

  rules: {
    semi: ["error", "always"],
    "no-var": ["error"],
    "@microsoft/sdl/no-document-write": ["error"],
    "react/no-danger": ["error"],
  },
};
