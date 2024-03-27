import { style, globalStyle, createVar, createTheme } from '@vanilla-extract/css';

globalStyle('body', {
  backgroundColor: 'black',
});

export const buttonStyle = style({
  'padding': 12, // px 생략가능
  'border': 'none',
  'backgroundColor': 'red',
  'color': 'white',

  ':hover': {
    opacity: 0.7,
  },
});

const myVar = createVar();
export const textStyle = style({
  vars: {
    '--my-var': 'blue',
    [myVar]: 'red',
  },
  background: 'var(--my-var)',
  color: myVar,
});

export const [darkTheme, vars] = createTheme({
  color: {
    background: 'black',
    text: 'white',
  },
});

export const whiteTheme = createTheme(vars, {
  color: {
    background: 'white',
    text: 'black',
  },
});

export const boxStyle = style({
  background: vars.color.background,
  color: vars.color.text,
});
