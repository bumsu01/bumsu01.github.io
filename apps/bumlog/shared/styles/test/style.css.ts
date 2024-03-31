import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  padding: 24,
  gap: 24,
});

export const itemContainer = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 16,
});

export const title = style({
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 48,
});

export const tabButton = style({
  'backgroundColor': 'magenta',
  'color': 'white',
  'padding': '8px 16px',
  'borderRadius': 4,
  'cursor': 'pointer',
  'transition': 'background-color 0.2s',
  'border': 'none',

  ':hover': {
    backgroundColor: 'purple',
  },

  'selectors': {
    '&:disabled': {
      backgroundColor: 'grey',
      cursor: 'not-allowed',
    },

    '&[aria-pressed="true"]': {
      backgroundColor: 'purple',
    },
  },
});
