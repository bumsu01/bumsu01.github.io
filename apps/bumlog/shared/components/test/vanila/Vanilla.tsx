/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState } from 'react';

import { boxStyle, buttonStyle, darkTheme, whiteTheme } from './Vanilla.css';

export default function Vanilla() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const onClickSwitchDarkModeButton = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>

      <div className={isDarkTheme ? darkTheme : whiteTheme}>
        <div className={boxStyle}>box</div>
        <button type="button" className={buttonStyle} onClick={onClickSwitchDarkModeButton}>
          Button
        </button>
      </div>
    </div>
  );
}
