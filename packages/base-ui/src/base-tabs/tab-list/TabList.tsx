import { ComponentProps } from 'react';

import { useTabsContext } from '../tabs';

import TabListContext from './TabListContext';

export default function TabList({ children, ...rest }: ComponentProps<'div'>) {
  const tabsContext = useTabsContext();

  return (
    <div {...rest}>
      <TabListContext.Provider value={tabsContext}>{children}</TabListContext.Provider>
    </div>
  );
}
