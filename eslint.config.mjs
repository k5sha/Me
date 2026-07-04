import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNext from "@next/eslint-plugin-next";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
      "@next/next": pluginNext,
      "unused-imports": pluginUnusedImports,
      "import": pluginImport,
      "prettier": pluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,

      "no-console": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      
      "prettier/prettier": "warn",

      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "after-used",
          "ignoreRestSiblings": false,
          "argsIgnorePattern": "^_.*?$"
        }
      ],
      
      "import/order": [
        "warn",
        {
          "groups": [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "pathGroups": [
            {
              "pattern": "~/**",
              "group": "external",
              "position": "after"
            }
          ],
          "newlines-between": "always"
        }
      ],
      
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          "callbacksLast": true,
          "shorthandFirst": true,
          "noSortAlphabetically": false,
          "reservedFirst": true
        }
      ],
      
      // Отступы между секциями кода
      "padding-line-between-statements": [
        "warn",
        {"blankLine": "always", "prev": "*", "next": "return"},
        {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
        {
          "blankLine": "any",
          "prev": ["const", "let", "var"],
          "next": ["const", "let", "var"]
        }
      ]
    },
  },
  
  configPrettier,
]);