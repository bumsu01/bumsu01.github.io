import { ComponentProps, useMemo, useState } from 'react';

import { Radio, Input, Label } from './components';
import RadioContext from './contexts/RadioContext';
import { RadioGroupContextProps } from './types';

export type RadioGroupProps = RadioGroupContextProps & ComponentProps<'div'>;

export default function RadioGroup({ value, disabled = false, children }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const RadioGroupValue = useMemo(
    () => ({
      value: selectedValue,
      disabled,
      setValue: setSelectedValue,
      onChange: () => {},
    }),
    [selectedValue, setSelectedValue, disabled],
  );

  return <RadioContext.Provider value={RadioGroupValue}>{children}</RadioContext.Provider>;
}

RadioGroup.Radio = Radio;
RadioGroup.Input = Input;
RadioGroup.Label = Label;
