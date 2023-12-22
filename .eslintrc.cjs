module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage',
    'tailwind.config.js',
    'postcss.config.js'
  ]
}
