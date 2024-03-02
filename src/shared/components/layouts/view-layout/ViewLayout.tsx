"use client";

import * as S from "./ViewLayout.styled";
import React from "react";
import Head from "next/head";

interface ViewLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function ViewLayout({
  children,
  pageTitle = "",
}: ViewLayoutProps) {
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
