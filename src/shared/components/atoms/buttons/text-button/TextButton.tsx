import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactElement } from "react";

import { Colors } from "../../../../styles/colors";

type TextButtonSize = "small" | "medium";

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TextButtonSize;
  color?: string;
  children: string | ReactElement;
  isUnderlined?: boolean;
}

const Button = styled.button<TextButtonProps>`
  border: none;
  background-color: transparent;
  color: ${({ disabled, color }) => (disabled ? Colors.grey06 : color)};
  ${({ isUnderlined, color }) =>
    isUnderlined
      ? css`
          height: 22px;
          border-bottom: 1px solid ${color};
        `
      : ""};
`;

function TextButton({ children, ...rest }: TextButtonProps) {
  return (
    <Button {...rest}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </Button>
  );
}

export default TextButton;
