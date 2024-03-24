/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React from 'react';

import * as S from './Button.css';
import type { ButtonProps } from './Button.types';

function Button({
  variant = 'contained',
  shape = 'rectangle',
  innerAlign = 'center',
  size = 'M',
  color = 'primary',
  disabled = false,
  isLoading = false,
  fullWidth = true,
  isExecuteOnce = true,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const isBaseButtonDisabled = disabled || isDisabled;

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isExecuteOnce) {
      setIsDisabled(true);
    }
    if (onClick) {
      onClick(event);
    }
    setIsDisabled(false);
  };

  const renderInnerContent = () => (
    <>{isLoading ? <span>Loading...</span> : <div>{children}</div>}</>
  );

  return (
    <button
      type="button"
      className={S.buttonRecipe({
        variant,
        shape,
        innerAlign,
        size,
        color,
        fullWidth,
      })}
      {...rest}
      onClick={handleOnClick}
      disabled={isBaseButtonDisabled}
    >
      {renderInnerContent()}
    </button>
  );
}

export default Button;
