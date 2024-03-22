module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      ['Feature', 'Fix', 'Hotfix', 'Docs', 'Style', 'Refactor', 'Test', 'Chore', 'Release'],
    ],
    'type-case': [2, 'always', 'start-case'],
  },
};
