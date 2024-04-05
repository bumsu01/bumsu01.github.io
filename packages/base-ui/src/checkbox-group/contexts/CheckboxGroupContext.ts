import { createContext } from 'react';

import { CheckboxGroupContextProps } from '../types';

const CheckboxGroupContext = createContext<CheckboxGroupContextProps | null>(null);

export default CheckboxGroupContext;
