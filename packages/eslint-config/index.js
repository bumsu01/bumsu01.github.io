module.exports = {
  extends: [
    'turbo',
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-floating-promises': 'off', // Next.js Disabled 권장
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',

    'import/no-default-export': 'off',
    'import/no-duplicates': ['warn', { considerQueryString: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'mjs': 'never',
        'ts': 'never',
        'tsx': 'never',
        'css': 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        'groups': ['external', 'builtin', 'internal', 'parent', 'sibling'],
        'pathGroups': [
          {
            pattern: '@bumsu/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '~**/**',
            group: 'internal',
          },
        ],
        'pathGroupsExcludedImportTypes': [],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'no-restricted-globals': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    'react/react-in-jsx-scope': 'off', // Next.js Disabled 권장
    'react/jsx-props-no-spreading': 'off', // Next.js Disabled 권장
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],
  },
  globals: {
    React: 'writable',
  },
};
