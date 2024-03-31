import { useContext } from 'react';

import TabsContext from './TabsContext';

export default function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabList와 TabPanel은 Tabs를 부모로 두어야합니다.');
  }
  return context;
}
