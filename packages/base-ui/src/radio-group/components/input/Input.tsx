/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ComponentProps } from 'react';

import useRadioGroupContext from '../../hooks';

export type RadioProps = {
  value: string;
  disabled: boolean;
} & ComponentProps<'input'> &
  React.PropsWithChildren<object>;

export default function Input({ value, disabled }: RadioProps) {
  const group = useRadioGroupContext();

  const handleChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
    group.setValue(value);
    if (group.onChange) {
      group.onChange(event);
    }
  };

  return (
    <input
      type="radio"
      value={value}
      disabled={disabled || group.disabled}
      checked={group.value !== undefined ? value === group.value : undefined}
      onChange={handleChange}
    />
  );
}
