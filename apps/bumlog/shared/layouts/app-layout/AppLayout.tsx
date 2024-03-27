'use client';

import * as S from './AppLayout.styled';
import React, { useState } from 'react';
import Head from 'next/head';
import { boxStyle, buttonStyle, darkTheme, whiteTheme } from './AppLayout.css';
import useBearStore from '../../store/useBearStore';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function AppLayout({ children, pageTitle = '' }: AppLayoutProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const { bears, increase, removeAllBears } = useBearStore((state) => state);

  let titleConcat = 'Responsive Sidebar Example';
  if (pageTitle) titleConcat = pageTitle + ' | ' + titleConcat;

  const onClickSwitchDarkModeButton = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <S.Centering>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.FixedWidth>
        <div>Layout Folder(app-layout)</div>
        {children}
      </S.FixedWidth>
    </S.Centering>
  );
}
