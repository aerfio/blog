module.exports = {
  env: { es6: true, browser: true, node: true, commonjs: true },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true, // Allows for the parsing of JSX
    },
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    // "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin

    // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // "prettier/@typescript-eslint",
    // "prettier",
    // "prettier/react",
  ],
  plugins: ["react-hooks", "sonarjs"],
  rules: {
    radix: "error",
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "use-isnan": "error",
    "wrap-iife": "error",
    curly: "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-extra-semi": "error",
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": 0, // sometimes you need any, this will be left as revier's duty to asses whether 'any' is justified
    "@typescript-eslint/restrict-plus-operands": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/explicit-function-return-type": 0, // let typescript infer types for us
    "arrow-body-style": ["error", "as-needed"],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["gatsby-*.js"],
};
