import * as React from 'react';
import { useMemo } from 'react';

type CheckboxContextProps = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

type CheckboxProps = CheckboxContextProps & React.PropsWithChildren<object>;

const CheckboxContext = React.createContext<CheckboxContextProps>({
  id: '',
  isChecked: false,
  onChange: () => {},
});

function BaseCheckBox({ id, isChecked, onChange, children = null }: CheckboxProps) {
  const value = useMemo(
    () => ({
      id,
      isChecked,
      onChange,
    }),
    [],
  );
  return <CheckboxContext.Provider value={value}>{children}</CheckboxContext.Provider>;
}

const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  return context;
};

function Checkbox({ ...props }) {
  const { id, isChecked, onChange } = useCheckboxContext();
  return <input type="checkbox" id={id} checked={isChecked} onChange={onChange} {...props} />;
}

function Label({ children = null, ...props }: React.PropsWithChildren<object>) {
  const { id } = useCheckboxContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}

BaseCheckBox.Checkbox = Checkbox;
BaseCheckBox.Label = Label;

export default BaseCheckBox;
