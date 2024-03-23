'use client';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonStyle = style({
  'display': 'flex',
  'alignItems': 'center',
  'gap': '4px',
  'overflow': 'hidden',
  'position': 'relative',
  'height': 'fit-content',
  'transition': 'all 0.2s ease',

  ':hover': {
    opacity: 0.7,
  },
});

export const buttonRecipe = recipe({
  base: {
    'display': 'flex',
    'alignItems': 'center',
    'gap': 4,
    'overflow': 'hidden',
    'position': 'relative',
    'height': 'fit-content',
    'transition': 'all 0.2s ease',

    ':hover': {
      opacity: 0.7,
    },
    'borderRadius': 6,
  },

  variants: {
    variant: {
      contained: { background: '#bbbbbb' },
      outlined: { borderColor: '#f44336' },
      text: { color: '#000000' },
    },
    shape: {
      rectangle: { borderRadius: 0 },
      rounded: { borderRadius: 999 },
      pill: { borderRadius: 6 },
    },
    color: {
      primary: { background: '#bbbbbb' },
      government: { background: '#e6007e' },
      white: { background: '#ffffff' },
      black: { background: '#000000' },
    },
    size: {
      S: { padding: 12 },
      M: { padding: 16 },
      L: { padding: 24 },
    },
    innerAlign: {
      left: { display: 'flex', alignItems: 'center', justifyContent: 'left' },
      center: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
      right: { display: 'flex', alignItems: 'center', justifyContent: 'right' },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },

  compoundVariants: [
    {
      variants: {
        color: 'government',
        size: 'L',
      },
      style: {
        background: 'government',
      },
    },
  ],

  defaultVariants: {
    color: 'primary',
    size: 'M',
  },
});
