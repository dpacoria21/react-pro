module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'indent': [
          'error',
          4,
          {
              'SwitchCase': 1,
          }
      ],
      'react-native/no-inline-styles': 0,
      'quotes': [
          'error',
          'single',
      ],
      'semi': [
          'error',
          'always',
      ],
      'prettier/prettier': 0,
      '@typescript-eslint/no-empty-interface': 'off',
      'react/no-unstable-nested-components': 0,
    },
  }
  