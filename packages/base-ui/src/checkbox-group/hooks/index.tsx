import { useContext } from 'react';

import CheckboxGroupContext from '../contexts/CheckboxGroupContext';

export default function useCheckboxContext() {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error('Checkbox은 CheckboxGroup를 부모로 두어야합니다.');
  }
  return context;
}
