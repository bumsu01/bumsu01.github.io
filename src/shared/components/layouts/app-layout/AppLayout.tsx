"use client";

import { Global } from "@emotion/react";
import globalStyles from "../../../styles/globalStyles";

import * as S from "./AppLayout.styled";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppLayout({
  children,
  className = undefined,
}: AppLayoutProps) {
  return (
    <div>
      <Global styles={globalStyles} />

      <S.Container className={className}>
        <S.Content>{children}</S.Content>
      </S.Container>
    </div>
  );
}
