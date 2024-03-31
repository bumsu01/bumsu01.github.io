import { useTabListContext } from '../tab-list';

type BaseTabProps = {
  value: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & React.ComponentProps<'button'>;

export default function Tab({ value, children, onClick = undefined, ...props }: BaseTabProps) {
  const { selectedValue, handleChange: onChange } = useTabListContext();
  const isSelected = selectedValue === value;

  const handleChange = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChange(value);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button type="button" {...props} onClick={handleChange} aria-pressed={isSelected} value={value}>
      {children}
    </button>
  );
}
