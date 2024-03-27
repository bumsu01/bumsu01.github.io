import React from 'react';

import { BaseCheckBox } from '@bumsu/base-ui';

import { checkBoxRecipe } from './CheckBox.css';
import { CheckBoxProps, VariantType } from './CheckBox.types';

function CheckBox({
  variants,
  padding,
  shape,
  align,
  gap,
  size,
  containerSize,
  fontSize,
  color,
  custom,
  ...rest
}: CheckBoxProps) {
  const [data, setData] = React.useState<VariantType[]>(variants);

  const onClick = (key: string) => {
    const updateData = data.map((item) =>
      item.id === key ? { ...item, selected: !item.selected } : { ...item },
    );
    setData(updateData);
  };
  return (
    <div className={checkBoxRecipe({ shape, align, containerSize, gap })}>
      {data.map((item) => (
        <BaseCheckBox
          id={item.id}
          key={item.id}
          isChecked={item.selected}
          isDisable={item.disabled || false}
          onChange={() => onClick(item.id)}
          {...rest}
        >
          <BaseCheckBox.Checkbox key={item.id} className={checkBoxRecipe({ size })} />
          <BaseCheckBox.Label className={checkBoxRecipe({ padding, fontSize, color })}>
            {item.title}
          </BaseCheckBox.Label>
        </BaseCheckBox>
      ))}
    </div>
  );
}
export default CheckBox;
