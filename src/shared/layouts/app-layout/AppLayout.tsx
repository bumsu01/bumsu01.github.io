"use client";

import * as S from "./AppLayout.styled";
import React from "react";
import Head from "next/head";

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function AppLayout({
  children,
  pageTitle = "",
}: AppLayoutProps) {
  let titleConcat = "Responsive Sidebar Example";

  if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;
  return (
    <S.Centering>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.FixedWidth>
        <div>Layout Folder(app-layout) - {children}</div>
      </S.FixedWidth>
    </S.Centering>
  );
}
