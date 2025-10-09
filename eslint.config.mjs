import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    globalIgnores(["**/node_modules", "**/public", "**/build"]),
    {
        extends: fixupConfigRules(
            compat.extends(
                "plugin:@typescript-eslint/recommended",
                "eslint:recommended",
                "next",
                "next/core-web-vitals",
                "plugin:react-hooks/recommended",
                "plugin:jest/recommended",
                "prettier"
            )
        ),

        plugins: {
            "@typescript-eslint": fixupPluginRules(typescriptEslint),
            "react-hooks": fixupPluginRules(reactHooks),
            "unused-imports": unusedImports,
            prettier,
            jest: fixupPluginRules(jest),
            "simple-import-sort": simpleImportSort,
        },

        languageOptions: {
            parser: tsParser,
        },

        rules: {
            "prettier/prettier": [
                "warn",
                {
                    endOfLine: "auto",
                },
            ],

            "@typescript-eslint/no-unused-vars": "error",
            "unused-imports/no-unused-imports": "error",
            "prefer-const": "error",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "@typescript-eslint/no-explicit-any": "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
        ignores: ["node_modules", "public", "build"],
    },
]);
