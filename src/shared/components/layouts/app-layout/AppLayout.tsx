"use client";

// import { Global } from "@emotion/react";
// import globalStyles from "../../../styles/globalStyles";

import * as S from "./AppLayout.styled";
import React, { useState } from "react";
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
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <S.Centering>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <S.FixedWidth>APP L - {children}</S.FixedWidth>
    </S.Centering>
  );
}
