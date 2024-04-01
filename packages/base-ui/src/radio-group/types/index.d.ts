/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import { SetStateAction } from 'react';

export type RadioGroupContextProps = {
  value: string;
  disabled?: boolean;
  setValue: React.Dispatch<SetStateAction<string>>;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement> | FormEvent<HTMLDivElement>) => void;
};

export type RadioContextProps = {
  value: string;
  disabled?: boolean;
  alignLabel?: AlignLabelType;
};

export const AlignLabelType = {
  right: 'right',
  left: 'left',
};
