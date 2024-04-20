import js from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ['src/**/*.ts'],
    ignores: ['**/*.config.js', 'node_modules/*', '!**/eslint.config.js'],
    languageOptions: {
      sourceType: 'module',
      parser: typescriptEslintParser,
    },
    rules: {
      'prettier/prettier': ['error'],
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
