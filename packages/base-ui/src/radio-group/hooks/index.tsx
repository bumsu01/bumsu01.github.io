import { useContext } from 'react';

import RadioGroupContext from '../contexts/RadioContext';

export default function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('Input, Label은 RadioWrapper를 부모로 두어야합니다.');
  }
  return context;
}
