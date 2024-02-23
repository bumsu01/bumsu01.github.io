import styled from "@emotion/styled";

interface ListButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement;
  icon?: React.ReactElement;
}

const Button = styled.button`
  height: 48px;
  border: none;
  border-radius: 8px;
  padding: 13px 10px 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f3;

  & > span {
    font-weight: medium;
    font-size: 14;
    line-height: "160%";
    color: #000000;
  }
`;

function ListButton({ children, icon = undefined, ...rest }: ListButtonProps) {
  return (
    <Button {...rest}>
      {typeof children === "string" ? <span>{children}</span> : children}
      {icon}
    </Button>
  );
}

export default ListButton;
