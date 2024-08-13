import vue from "eslint-plugin-vue";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tailwindcss from "eslint-plugin-tailwindcss";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*.config.ts"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
), {
    plugins: {
        vue,
        "@typescript-eslint": typescriptEslint,
        tailwindcss,
        prettier,
    },

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
}, ...compat.extends("plugin:@typescript-eslint/recommended-requiring-type-checking").map(config => ({
    ...config,
    files: ["**/*.config.{js,ts}"],
}))];