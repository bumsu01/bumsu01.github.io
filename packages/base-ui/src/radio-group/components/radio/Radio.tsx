import { ComponentProps } from 'react';

import { RadioContextProps } from '../../types';
import { Input } from '../input';
import { Label } from '../label';

export type RadioProps = RadioContextProps &
  ComponentProps<'div'> &
  React.PropsWithChildren<object>;

export default function Radio({ value, disabled = false, children, ...rest }: RadioProps) {
  return (
    <div {...rest}>
      <Input value={value} disabled={disabled} />
      <Label value={value}>{children}</Label>
    </div>
  );
}
