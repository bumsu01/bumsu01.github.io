'use client';

import * as React from 'react';

type BaseButtonProps = {
  isExecuteOnce?: boolean;
} & React.ComponentProps<'button'>;

function BaseButton({
  disabled,
  onClick,
  isExecuteOnce = true,
  children = null,
  ...props
}: React.PropsWithChildren<object> & BaseButtonProps) {
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

  return (
    <button type="button" {...props} onClick={handleOnClick} disabled={isBaseButtonDisabled}>
      {children}
    </button>
  );
}

export default BaseButton;
