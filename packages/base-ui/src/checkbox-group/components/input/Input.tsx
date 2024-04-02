import React, { ComponentProps } from 'react';

import useCheckboxContext from '../../hooks';
import { CheckboxDataType } from '../../types';

export type CheckboxProps = CheckboxDataType &
  ComponentProps<'input'> &
  React.PropsWithChildren<object>;

const Input = React.forwardRef(
  (
    { id, checked, disabled, ...props }: CheckboxProps,
    inputRef?: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const group = useCheckboxContext();
    const item = group.value.find((checkboxData) => checkboxData.id === id) ?? {
      id,
      checked,
      disabled,
    };

    const handleChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
      const updateData = group.value.map((data) =>
        data.id === id ? { ...data, checked: !data.checked } : { ...data },
      );
      group.setValue(updateData);
      if (group.onChange) {
        group.onChange(event);
      }
    };
    return (
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        disabled={disabled || item.disabled || group.disabled}
        checked={checked || item.checked || group.allChecked}
        onChange={handleChange}
        {...props}
      />
    );
  },
);
export default Input;
