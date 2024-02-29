"use client";

import * as S from "./AppLayout.styled";
import React, { useState } from "react";
import Head from "next/head";
import { Sidebar } from "@/organisms/sidebar";

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
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <S.Centering>
      <Sidebar></Sidebar>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.FixedWidth>
        <div>Layout Folder(app-layout) - {children}</div>
      </S.FixedWidth>
    </S.Centering>
  );
}
