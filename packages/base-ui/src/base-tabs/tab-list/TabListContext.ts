import { createContext } from 'react';

import { TabListContextProps } from './TabList.types';

const TabListContext = createContext<TabListContextProps | null>(null);

export default TabListContext;
