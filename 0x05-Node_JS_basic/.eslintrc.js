module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    node: true, // Added if you're using Node.js
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
    ecmaVersion: 2018,
    sourceType: 'module', // Allows import statements
  },
  plugins: ['jest', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // Add extensions used in your project
      }
    }
  },
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'import/no-unresolved': 'error', // Ensures imports can be resolved
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
