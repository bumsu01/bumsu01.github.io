"use client";

import * as S from "./AppLayout.styled";
import React, { useState } from "react";
import Head from "next/head";
import { boxStyle, buttonStyle, darkTheme, whiteTheme } from "./AppLayout.css";
import useStore from "@/store/useStore";

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function AppLayout({
  children,
  pageTitle = "",
}: AppLayoutProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const { bears, increase } = useStore();

  let titleConcat = "Responsive Sidebar Example";
  if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

  const onClickSwitchDarkModeButton = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <S.Centering>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.FixedWidth>
        <div className={isDarkTheme ? darkTheme : whiteTheme}>
          <div className={boxStyle}>box</div>
          <button className={buttonStyle} onClick={onClickSwitchDarkModeButton}>
            Button
          </button>
          <div>
            <h1>{bears} around here ...</h1>
            {/* <button className={buttonStyle} onClick={increase}>
              one up
            </button> */}
          </div>
          <div>Layout Folder(app-layout) - {children}</div>
        </div>
      </S.FixedWidth>
    </S.Centering>
  );
}
