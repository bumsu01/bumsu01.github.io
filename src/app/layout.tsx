'use client';

import { ReactNode, useState } from 'react';

import { Header } from '@/organisms/header';
import { Sidebar } from '@/organisms/sidebar';
import { AppLayout } from '@/layout/app-layout';
import useWindowResize from 'shared/hooks/useWindowResize';

import * as S from '@/layout/app-layout/AppLayout.styled';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [selectPage, setSelectPage] = useState<string>('home');
  const windowSize = useWindowResize();

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <S.Container>
          <Sidebar windowWidth={windowSize.width} initSidebarWidth={windowSize.initSidebar} />
          <S.Frame style={{ position: 'absolute', left: windowSize.initSidebar + 20 }}>
            <AppLayout pageTitle={selectPage}>{children}</AppLayout>
          </S.Frame>
        </S.Container>
      </body>
    </html>
  );
}
