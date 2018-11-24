module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    impliedStrict: true,
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: {
          parameters: 2,
          body: 1,
        },
        ObjectExpression: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 2,
    strict: 2,
    'prettier/prettier': ['error', { trailingComma: 'all' }],
  },
};
