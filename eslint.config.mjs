import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    // Specify recommended configurations here, if any
  },
});

const eslintConfig = [
  ...compat.extends(
    'next',
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ),
  {
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypeScript,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      // JavaScript rules
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-unused-vars': 'warn',
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],
      // TypeScript rules
      '@typescript-eslint/array-type': ['warn', { default: 'array' }],
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      // React rules
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'warn',
      // Tailwind CSS Plugin
      // "tailwindcss/classnames-order": "warn",
      // "tailwindcss/enforces-shorthand": "warn",
      // "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      react: { version: 'detect' },
      tailwindcss: { callees: ['cn'] },
    },
  },
];

export default eslintConfig;
