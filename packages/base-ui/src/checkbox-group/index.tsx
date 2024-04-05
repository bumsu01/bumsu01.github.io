import { ComponentProps, useMemo, useState } from 'react';

import { Input, Label, Checkbox } from './components';
import CheckboxGroupContext from './contexts/CheckboxGroupContext';
import { CheckboxDataType, CheckboxGroupContextProps } from './types';

export type CheckboxGroupProps = CheckboxGroupContextProps &
  ComponentProps<'div'> &
  React.PropsWithChildren<object>;

export default function CheckboxGroup({
  value = [{ id: '', checked: false }],
  allChecked = false,
  disabled = false,
  children,
}: CheckboxGroupProps) {
  const [groupData, setGroupData] = useState<CheckboxDataType[]>(value);

  const checkBoxGroupValue = useMemo(
    () => ({
      value: groupData,
      allChecked,
      disabled,
      setValue: setGroupData,
      onChange: () => {},
    }),
    [groupData, setGroupData, disabled, allChecked],
  );

  return (
    <CheckboxGroupContext.Provider value={checkBoxGroupValue}>
      {children}
    </CheckboxGroupContext.Provider>
  );
}

CheckboxGroup.Input = Input;
CheckboxGroup.Label = Label;
CheckboxGroup.Checkbox = Checkbox;
