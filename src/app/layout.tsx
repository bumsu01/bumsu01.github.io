"use client";

import { ReactNode } from "react";

import { Header } from "@/organisms/header";
import { Sidebar } from "@/organisms/sidebar";
import { ViewLayout } from "@/layout/view-layout";

import * as S from "@/layout/app-layout/AppLayout.styled";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <S.Container>
          <Sidebar />
          <S.Frame>
            <Header />
            <ViewLayout pageTitle="child">
              <div className="p-5">{children}</div>
            </ViewLayout>
          </S.Frame>
        </S.Container>
      </body>
    </html>
  );
}
