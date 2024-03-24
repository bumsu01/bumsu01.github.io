import { create } from '@storybook/theming';

const storybookTheme = create({
  base: 'light',

  // Typography
  fontBase: 'Pretendard',

  // Brand
  brandTitle: 'Bumlog Design System',
  brandImage: 'images/img-bs-logo.png',
  brandTarget: '_self',

  // Color
  colorPrimary: '#4C52FF',
  colorSecondary: '#858DFF',

  // UI
  appBg: '#F7F7FF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#CDCEFF',
  appBorderRadius: 4,

  //Text colors
  textColor: '#121F34',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#596271',
  barSelectedColor: '#4C52FF',
  barBg: '#F7F7FF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#B8BCC2',
  inputTextColor: '#121F34',
  inputBorderRadius: 8,
});

export default storybookTheme;
