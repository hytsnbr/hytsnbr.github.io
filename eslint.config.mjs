import js from "@eslint/js";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  {
    ignores: ["dist/**"],
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),
  ...tailwindcss.configs["flat/recommended"],
  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 2024,
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },

    rules: {
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "tailwindcss/no-custom-classname": ["off"],
    },
  },
];
