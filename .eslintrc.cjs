module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  rules: {
    semi: 0,
    'multiline-ternary': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-invalid-void-type': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ]
  }
};
