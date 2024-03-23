'use client';

import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { UrlObject } from 'url';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonShape = 'rectangle' | 'rounded' | 'pill';

export type ButtonSize = 'L' | 'M' | 'S';

export type ButtonColor = 'primary' | 'government' | 'white' | 'black';

export type ButtonAs = 'button' | 'a';

export type ButtonInnerAlign = 'left' | 'center' | 'right';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<LinkProps, 'href'> & {
    href?: string | UrlObject;
    as?: ButtonAs;
    variant?: ButtonVariant;
    shape?: ButtonShape;
    innerAlign?: ButtonInnerAlign;
    size?: ButtonSize;
    color?: ButtonColor;
    isLoading?: boolean;
    fullWidth?: boolean;
    isExecuteOnce?: boolean;
    onClick: () => void;
  };
