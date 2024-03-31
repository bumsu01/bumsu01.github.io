import { ComponentProps, useMemo, useState } from 'react';

import TabsContext from './TabsContext';

export type TabsProps = {
  defaultValue?: string;
} & ComponentProps<'div'>;

export default function Tabs({ defaultValue = '', children, ...rest }: TabsProps) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  const tabsContext = useMemo(() => {
    return { selectedValue, handleChange };
  }, [selectedValue]);

  return (
    <div {...rest}>
      <TabsContext.Provider value={tabsContext}>{children}</TabsContext.Provider>
    </div>
  );
}
