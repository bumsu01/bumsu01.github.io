<!--
⚠️👇 Chore Issue 제출 전에 확인해보세요 👇⚠️
- 모든 문서, 특히 [README](https://github.com/bumsu01/bumsu01.github.io/blob/main/README.md)를 읽어보세요. 여기에는 문제를 해결하는 데 도움이 되는 정보가 포함될 수 있습니다.
- 버그가 이미 [Issue화](https://github.com/bumsu01/bumsu01.github.io/issues)되지 않았는지 확인하세요.
- 문제 발생 시, 도움이 필요한 경우에는 [Tistory](https://bbmsk2.tistory.com/) 를 사용해주세요
- 이슈 템플릿의 제목을 제거하지 마십시오. 그렇지 않으면 봇에 의해 유효하지 않은 것으로 처리됩니다.
⚠️👆 이슈를 제출하기 전에 다음 지침을 따르세요 👆⚠️
-->
name: #️⃣ Chore
description: 환경에 관한 이슈를 생성합니다.
title: "[Chore]: "
labels: ["Chore"]
projects: bumsu01
assignees:
  - octocat
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see!
      value: "A bug happened!"
    validations:
      required: true
  - type: dropdown
    id: version
    attributes:
      label: Version
      description: What version of our software are you running?
      options:
        - 1.0.2 (Default)
        - 1.0.3 (Edge)
      default: 0
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: Please copy and paste any relevant log output. This will be automatically formatted into code, so no need for backticks.
      render: shell
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://example.com)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
