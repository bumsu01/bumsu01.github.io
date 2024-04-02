import { ComponentProps } from 'react';

type LabelProps = {
  id: string;
  children?: React.ReactNode;
} & ComponentProps<'label'>;

export default function Label({ id, children = null, ...props }: LabelProps) {
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}
