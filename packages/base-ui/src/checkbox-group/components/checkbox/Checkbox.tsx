import React, { ComponentProps } from 'react';

import { CheckboxContextProps } from '../../types';
import { Input } from '../input';
import { Label } from '../label';

export type CheckboxProps = CheckboxContextProps &
  ComponentProps<'div'> &
  ComponentProps<'input'> &
  ComponentProps<'label'> &
  React.PropsWithChildren<object>;

const Checkbox = React.forwardRef(
  (
    {
      id = '',
      checked = false,
      disabled = false,
      alignLabel = 'right',
      children,
      ...rest
    }: CheckboxProps,
    ref?: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return alignLabel === 'right' ? (
      <div {...rest}>
        <Input id={id} checked={checked} disabled={disabled} ref={ref} {...rest} />
        <Label id={id} {...rest}>
          {children}
        </Label>
      </div>
    ) : (
      <div {...rest}>
        <Label id={id} {...rest}>
          {children}
        </Label>
        <Input id={id} checked={checked} disabled={disabled} ref={ref} {...rest} />
      </div>
    );
  },
);
export default Checkbox;
