'use client';

import { ReactNode } from 'react';

// import { Header } from '../shared/components/organisms/header';
import { Sidebar } from '../shared/components/organisms/sidebar';
import useWindowResize from '../shared/hooks/useWindowResize';
import { AppLayout } from '../shared/layouts/app-layout';
import * as S from '../shared/layouts/app-layout/AppLayout.styled';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  // const [selectPage, setSelectPage] = useState<string>('home');
  const windowSize = useWindowResize();

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <S.Container>
          <Sidebar windowWidth={windowSize.width} initSidebarWidth={windowSize.initSidebar} />
          <S.Frame style={{ position: 'absolute', left: windowSize.initSidebar + 20 }}>
            <AppLayout pageTitle="home">{children}</AppLayout>
          </S.Frame>
        </S.Container>
      </body>
    </html>
  );
}
