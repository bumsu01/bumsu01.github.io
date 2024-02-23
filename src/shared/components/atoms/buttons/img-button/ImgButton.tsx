import styled from "@emotion/styled";
import Image from "next/image";

interface ImgButtonProps {
  radius: string;
  radio: string;
  minWidth: string;
  minHeight: string;
  maxHeight: string;
  imgUrl: string;
  onClick: () => void;
  className?: string;
}

const Button = styled.button<{
  radius: string;
  radio: string;
  minWidth: string;
  minHeight: string;
  maxHeight: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  height: 0;
  width: 100%;
  min-width: ${(props) => props.minWidth};
  max-width: 500px;
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.radio};
  border-radius: ${(props) => props.radius};
`;

export default function ImgButton({
  radius,
  radio,
  minWidth,
  minHeight,
  maxHeight,
  imgUrl,
  onClick,
  className = undefined,
}: ImgButtonProps) {
  return (
    <Button
      type="button"
      className={className}
      onClick={onClick}
      radius={radius}
      radio={radio}
      minWidth={minWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
    >
      <Image src={imgUrl} fill alt={imgUrl} />
    </Button>
  );
}
