module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    serviceworker: true
  },
  extends: ["airbnb", "prettier"],
  settings: {
    react: {
      pragma: "React",
      version: "16.6.3"
    },
    "import/resolver": {
      webpack: {
        config: "webpack.config.js"
      }
    }
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["import", "react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-param-reassign": [2, { props: false }],
    "no-console": 2,
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error"],
    "react/prop-types": 0,
    "import/no-dynamic-require": 0,
    "no-nested-ternary": "off"
  }
};
