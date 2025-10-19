import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierEslint from 'eslint-config-prettier/flat';

export default tseslint.config(
  {
    ignores: ['dist/**', 'bin/**'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, prettierEslint],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['*.js', '*.cjs', '*.mjs', '*.ts', 'vite.config.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: [eslint.configs.recommended, prettierEslint],
  }
);
