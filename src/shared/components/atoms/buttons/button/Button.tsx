import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";

import { BUTTON_VARIANT } from "../buttonConstants";
import { ButtonVariant } from "../buttons";

import { Container, FadeOutArea } from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isExecuteOnce?: boolean;
  children: string | ReactNode;
  variant?: ButtonVariant;
  leftButton?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

function Buttons({
  isExecuteOnce = false,
  children,
  variant = BUTTON_VARIANT.FULL,
  leftButton = undefined,
  className = undefined,
  onClick,
  disabled,
  ...props
}: ButtonProps) {
  const [isClickedOnce, setIsClickedOnce] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onBtnClick: ButtonProps["onClick"]
  ) => {
    if (!isClickedOnce && onBtnClick) {
      onBtnClick(e);
    }

    if (isExecuteOnce) {
      setIsClickedOnce(true);
    }

    return undefined;
  };

  return (
    <FadeOutArea variant={variant} className={className}>
      {leftButton && (
        <Container
          type="button"
          variant={variant}
          onClick={leftButton.onClick}
          isLeftButton
        >
          {leftButton.text}
        </Container>
      )}

      <Container
        type="button"
        variant={variant}
        onClick={(e) => handleClick(e, onClick)}
        disabled={disabled || isClickedOnce}
        {...props}
      >
        {children}
      </Container>
    </FadeOutArea>
  );
}

export default Buttons;
