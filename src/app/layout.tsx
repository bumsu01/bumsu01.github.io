"use client";

import { ReactNode } from "react";

import { Header } from "@/organisms/header";
import { Sidebar } from "@/organisms/sidebar";
import { AppLayout } from "@/layout/app-layout";

import * as S from "@/layout/app-layout/AppLayout.styled";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <S.Container>
          <Sidebar />
          <S.Frame>{children}</S.Frame>
        </S.Container>
      </body>
    </html>
  );
}
