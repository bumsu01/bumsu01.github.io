'use client';

import { recipe } from '@vanilla-extract/recipes';

export const checkBoxRecipe = recipe({
  base: {
    display: 'inline-block',
    alignItems: 'center',
    margin: '10px',
    padding: '5px',
    borderRadius: '4px',
    marginRight: '10px',
    verticalAlign: 'middle',
  },
  variants: {
    shape: {
      base: { background: 'inherit' },
      outLine: {
        border: `1px solid #e6007e`,
      },
      fill: { background: '#e6007e' },
    },
    color: {
      primary: { background: '#bbbbbb' },
      government: { background: '#e6007e' },
      white: { background: '#ffffff' },
      black: { background: '#000000' },
    },
    containerSize: {
      S: { padding: 12 },
      M: { padding: 22 },
      L: { padding: 32 },
    },
    size: {
      S: { width: '10px', height: '10px' },
      M: { width: '20px', height: '20px' },
      L: { width: '30px', height: '30px' },
    },
    fontSize: {
      S: { fontSize: '20px' },
      M: { fontSize: '30px' },
      L: { fontSize: '40px' },
    },
    gap: {
      S: { gap: '4px' },
      M: { gap: '10px' },
      L: { gap: '20px' },
    },
    padding: {
      S: { padding: '10px' },
      M: { padding: '20px' },
      L: { padding: '30px' },
    },
    align: {
      row: { display: 'inline-flex' },
      vertical: { display: 'inline-block' },
    },
  },

  compoundVariants: [
    {
      variants: {
        color: 'primary',
      },
      style: {
        fontSize: 'L',
      },
    },
  ],
  defaultVariants: {
    shape: 'base',
  },
});
