import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      reactHooks: pluginReactHooks,
    },
    rules: {
      indent: ["error", 2],
      "max-lines": ["error", { max: 200}],
      // Add other rules as needed
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
