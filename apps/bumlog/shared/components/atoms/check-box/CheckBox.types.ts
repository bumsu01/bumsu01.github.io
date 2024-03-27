'use client';

export type CheckBoxVariant = 'contained' | 'outlined' | 'text';

export type CheckBoxShape = 'base' | 'outLine' | 'fill';

export type CheckBoxSize = 'L' | 'M' | 'S';

export type CheckBoxFontSize = 'L' | 'M' | 'S';

export type CheckBoxColor = 'primary' | 'government' | 'white' | 'black';

export type CheckBoxAlign = 'row' | 'vertical';

export type VariantType = {
  id: string;
  title: string;
  description?: string;
  selected: boolean;
  disabled?: boolean;
};

export type CheckBoxProps = {
  variants: VariantType[];
  padding?: CheckBoxSize;
  gap?: CheckBoxSize;
  shape?: CheckBoxShape;
  align?: CheckBoxAlign;
  size?: CheckBoxSize;
  containerSize?: CheckBoxSize;
  fontSize?: CheckBoxFontSize;
  color?: CheckBoxColor;
  custom?: boolean;
};
