module.exports = {
  types: [
    { value: 'Feature', name: '🔥 Feature:\t새로운 기능을 추가했거나 기존 기능을 개선한 경우' },
    { value: 'Fix', name: '🔧 Fix:\t기존 기능을 수정한 경우' },
    { value: 'HotFix', name: '🐛 HotFix:\t상용 환경에서 발생한 버그를 수정하는 경우' },
    { value: 'Docs', name: '📃 Docs:\t문서를 수정했거나 추가한 경우' },
    {
      value: 'Style',
      name: '🎨 Style:\t스타일을 수정한 경우',
    },
    {
      value: 'Refactor',
      name: '🏗️ Refactor:\t구조를 변경했거나 Feature/Fix 이상으로 코드를 수정한 경우',
    },
    {
      value: 'Test',
      name: '🧪 Test:\t테스트 코드를 추가한 경우',
    },
    {
      value: 'Chore',
      name: '🐳 Chore:\t기능에 영향을 주지 않는 부분의 코드를 수정한 경우',
    },
    {
      value: 'Release',
      name: '📦 Release:\t새로운 버전을 배포하거나 기존 버전에 패치하는 경우 ',
    },
  ],
  messages: {
    subject: 'Commit Message를 입력해주세요. {Issue Number} {Description}\n',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'body', 'footer'],
  subjectLimit: 100,
  upperCaseSubject: true,
};
