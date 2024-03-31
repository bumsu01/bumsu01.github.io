/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */

'use client';

import React, { useState } from 'react';

import BaseTabs from '@bumsu/base-ui/src/base-tabs';

import { CheckBox } from '@atoms/check-box';
import * as testStyle from '@style/test/style.css';

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
      <BaseTabs.Tabs defaultValue="3">
        <BaseTabs.TabList>
          <BaseTabs.Tab className={testStyle.tabButton} value="1">
            Tab 1
          </BaseTabs.Tab>
          <BaseTabs.Tab className={testStyle.tabButton} value="2">
            Tab 2
          </BaseTabs.Tab>
          <BaseTabs.Tab className={testStyle.tabButton} value="3">
            Tab 3
          </BaseTabs.Tab>
          <BaseTabs.Tab className={testStyle.tabButton} value="4" disabled>
            Tab Disabled
          </BaseTabs.Tab>
        </BaseTabs.TabList>
        <BaseTabs.TabPanel value="1">Panel 1</BaseTabs.TabPanel>
        <BaseTabs.TabPanel value="2">Panel 2</BaseTabs.TabPanel>
        <BaseTabs.TabPanel value="3">Panel 3</BaseTabs.TabPanel>
        <BaseTabs.TabPanel value="4">Panel 4</BaseTabs.TabPanel>
      </BaseTabs.Tabs>
    </div>
  );
}
