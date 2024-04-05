import { useContext } from 'react';

import TabListContext from './TabListContext';

export default function useTabListContext() {
  const context = useContext(TabListContext);
  if (!context) {
    throw new Error('Tab은 TabList를 부모로 두어야합니다.');
  }
  return context;
}
