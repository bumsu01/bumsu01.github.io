import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { BUTTON_VARIANT } from "../buttonConstants";
import { ButtonVariant } from "../buttons";

const { LARGE, FULL, ROUND, KEY_OUTLINED, OUTLINED } = BUTTON_VARIANT;

interface ButtonStyleProps {
  disabled?: boolean;
  variant?: ButtonVariant;
  isDuo?: boolean;
  isLeftButton?: boolean;
}

const makeButtonStyle = ({
  disabled,
  variant,
  isLeftButton,
}: ButtonStyleProps) => {
  if (isLeftButton) {
    return css`
      background-color: #f0f0f3;
      color: #000000;
    `;
  }

  if (variant === KEY_OUTLINED) {
    return css`
      background-color: #ffffff;
      border: 2px solid "#49d1fc";
      color: "#49d1fc";
    `;
  }

  if (variant === OUTLINED) {
    return css`
      background-color: #ffffff;
      border: 1px solid #f0f0f3;
      color: #000000;
    `;
  }

  return disabled
    ? css`
        background-color: #ffffff;
        color: "#49d1fc";
      `
    : css`
        background-color: "#49d1fc";
        box-shadow: 0px 6px 8px -4px rgba(115, 68, 229, 0.24);
        color: #ffffff;
      `;
};

export const Container = styled.button<ButtonStyleProps>`
  height: ${({ variant }) => {
    if (variant === LARGE) return "58px";

    if (variant === FULL) return "56px";

    if (variant === ROUND) return "48px";

    if (variant === OUTLINED || variant === KEY_OUTLINED) return "52px";

    return "0px";
  }};
  flex: 1;
  padding: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${makeButtonStyle}
`;

export const FadeOutArea = styled.div<{ variant?: ButtonVariant }>`
  display: flex;
  flex: 1;
  gap: 8px;

  ${({ variant }) =>
    variant === FULL
      ? css`
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            #ffffff 41.65%
          );
          padding: 16px 24px;
        `
      : ""}
`;
