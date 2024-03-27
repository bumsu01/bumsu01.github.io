/* eslint-disable react/button-has-type */

'use client';

import React, { useState } from 'react';

import { CheckBox } from '@atoms/check-box';

import {
  boxStyle,
  buttonStyle,
  darkTheme,
  whiteTheme,
} from '../../shared/layouts/app-layout/AppLayout.css';
import useBearStore from '../../shared/store/useBearStore';

export default function ContactPage() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const { bears, increase, removeAllBears } = useBearStore((state) => state);

  const onClickSwitchDarkModeButton = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const checkBoxVar = [
    {
      id: '1',
      title: 'one',
      selected: false,
    },
    {
      id: '2',
      title: 'two',
      selected: false,
    },
    {
      id: '3',
      title: 'three',
      selected: false,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>

      <div className={isDarkTheme ? darkTheme : whiteTheme}>
        <div className={boxStyle}>box</div>
        <button className={buttonStyle} onClick={onClickSwitchDarkModeButton}>
          Button
        </button>
        <div>
          <h1>{bears} around here ...</h1>
          <button className={buttonStyle} onClick={increase}>
            one up
          </button>
          <button className={buttonStyle} onClick={removeAllBears}>
            remove all
          </button>
        </div>
      </div>
      <CheckBox
        variants={checkBoxVar}
        color="government"
        shape="fill"
        padding="L"
        align="row"
        containerSize="L"
        size="L"
        fontSize="S"
      />
    </div>
  );
}
