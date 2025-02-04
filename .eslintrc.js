module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)', '**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['cypress/**/*.js'],
      plugins: ['cypress'],
      env: { 'cypress/globals': true },
    },
  ],
};
