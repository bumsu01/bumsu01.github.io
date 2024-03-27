import * as React from 'react';
import { useMemo } from 'react';

type CheckboxContextProps = {
  id: string;
  className?: string;
  isDisable: boolean;
  isChecked: boolean;
  onChange: () => void;
};

type CheckboxProps = CheckboxContextProps & React.PropsWithChildren<object>;

const CheckboxContext = React.createContext<CheckboxContextProps>({
  id: '',
  className: '',
  isDisable: false,
  isChecked: false,
  onChange: () => {},
});

function BaseCheckBox({
  id,
  className = '',
  isChecked,
  isDisable,
  onChange,
  children = null,
}: CheckboxProps) {
  const value = useMemo(
    () => ({
      id,
      className,
      isDisable,
      isChecked,
      onChange,
    }),
    [id, isChecked, onChange],
  );
  return (
    <CheckboxContext.Provider value={value}>
      <div className={value.className}>{children}</div>
    </CheckboxContext.Provider>
  );
}

const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  return context;
};

function Checkbox({ ...props }) {
  const { id, isChecked, isDisable, onChange } = useCheckboxContext();

  return (
    <input
      type="checkbox"
      id={id}
      disabled={isDisable}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
}

interface LabelProps {
  children?: React.ReactNode;
  className?: string;
}

function Label({ children = null, className = '', ...props }: LabelProps) {
  const { id } = useCheckboxContext();
  return (
    <label htmlFor={id} {...props} className={className}>
      {children}
    </label>
  );
}

BaseCheckBox.Checkbox = Checkbox;
BaseCheckBox.Label = Label;

export default BaseCheckBox;
