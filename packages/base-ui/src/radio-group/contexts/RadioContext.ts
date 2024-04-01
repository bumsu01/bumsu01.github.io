import { createContext } from 'react';

import { RadioGroupContextProps } from '../types';

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export default RadioGroupContext;
