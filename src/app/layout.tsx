"use client";

import { ReactNode, useEffect, useState } from "react";

import { Header } from "@/organisms/header";
import { Sidebar } from "@/organisms/sidebar";
import { AppLayout } from "@/layout/app-layout";
import useWindowResize from "shared/hooks/useWindowResize";

import * as S from "@/layout/app-layout/AppLayout.styled";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const windowSize = useWindowResize();
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);

  useEffect(() => {
    if (windowSize.width === undefined) {
      return;
    }
    setSidebarWidth(() => {
      if (windowSize.width === undefined) {
        return 0;
      }
      if (windowSize.width < 1024) {
        return 8;
      } else if (windowSize.width < 1512) {
        return 344;
      } else {
        return 500;
      }
    });
  }, [windowSize]);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <S.Container>
          <Sidebar />
          <S.Frame style={{ position: "absolute", left: sidebarWidth + 20 }}>
            {children}
          </S.Frame>
        </S.Container>
      </body>
    </html>
  );
}
