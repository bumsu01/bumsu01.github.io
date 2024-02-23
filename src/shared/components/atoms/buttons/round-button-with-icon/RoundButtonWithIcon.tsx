import styled from "@emotion/styled";

import { ArrowRightSmWithTailIcon } from "../../icons/common-sm";

interface RoundButtonWithIconProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  padding-right: 10px;
  padding-left: 1rem;
  text-align: left;
  color: #000000;
  font-weight: medium;
  font-size: 14;
  line-height: "160%";
  color: #000000;
`;

export default function RoundButtonWithIcon({
  text,
  onClick,
  className = undefined,
}: RoundButtonWithIconProps) {
  return (
    <Button type="button" className={className} onClick={onClick}>
      {text}

      <ArrowRightSmWithTailIcon />
    </Button>
  );
}
