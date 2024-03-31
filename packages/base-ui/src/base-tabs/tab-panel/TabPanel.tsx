import { ComponentProps } from 'react';

import { useTabsContext } from '../tabs';

type BaseTabProps = {
  value: string;
} & ComponentProps<'div'>;

export default function TabList({ value, children, ...rest }: BaseTabProps) {
  const { selectedValue } = useTabsContext();

  const isSelectedValue = selectedValue === value;

  if (!isSelectedValue) {
    return null;
  }

  return <div {...rest}>{children}</div>;
}
