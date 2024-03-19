"use client";

import React, { useState } from "react";
import {
  boxStyle,
  buttonStyle,
  darkTheme,
  whiteTheme,
} from "@/layout/app-layout/AppLayout.css";
import useBearStore from "@/store/useBearStore";

export default function ContactPage() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const { bears, increase, removeAllBears } = useBearStore((state) => state);

  const onClickSwitchDarkModeButton = () => {
    setIsDarkTheme(!isDarkTheme);
  };

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
    </div>
  );
}
