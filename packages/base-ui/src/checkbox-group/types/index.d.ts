import { FormEvent } from 'react';

export type CheckboxDataType = {
  id: string;
  checked: boolean;
  disabled?: boolean;
};

export type CheckboxGroupContextProps = {
  value: CheckboxDataType[];
  allChecked?: boolean;
  disabled?: boolean;
  setValue: React.Dispatch<SetStateAction<object>>;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement> | FormEvent<HTMLDivElement>) => void;
};

export type CheckboxContextProps = {
  alignLabel?: 'right' | 'left';
} & CheckboxDataType;
