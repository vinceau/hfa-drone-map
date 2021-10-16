module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allow parsing of JSX
    },
  },
  ignorePatterns: ["/*.js"],
  plugins: ["simple-import-sort", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "warn",
    "import/no-default-export": "error",
    "import/no-named-as-default-member": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "no-undef": "off",
    "new-cap": "error",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    curly: "error",
  },
};
