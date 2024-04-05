import { ComponentProps } from 'react';

type LabelProps = {
  value: string;
  children?: React.ReactNode;
} & ComponentProps<'label'>;

export default function Label({ value = '', children = null, ...props }: LabelProps) {
  return (
    <label htmlFor={value} {...props}>
      {children}
    </label>
  );
}
