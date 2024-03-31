import { createContext } from 'react';

import type { TabsContextProps } from './Tabs.types';

const TabsContext = createContext<TabsContextProps | null>(null);

export default TabsContext;
