/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Sidebar.styled";
import { SidebarItem } from "../sidebar-item";
import { SidebarProfile } from "../sidebar-profile";
import SidebarSocial from "../sidebar-social/SidebarSocial";
import SidebarAlert from "../sidebar-alert/SidebarAlert";

export default function Sidebar() {
  const windowWidth = window.innerWidth;
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(() => initialData());

  function initialData(): number {
    if (windowWidth < 1024) {
      return 8;
    } else if (window?.innerWidth < 1512) {
      return 344;
    } else {
      return 500;
    }
  }
  console.log("down:", sidebarWidth);

  const mouseDownHandler = useCallback(
    (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;

        console.log("move:", sidebarWidth, deltaX);
        setSidebarWidth(() => {
          return sidebarWidth + deltaX;
        });
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        console.log(
          "up",
          sidebarWidth + deltaX,
          sidebarWidth + deltaX < windowWidth / 2 ? initialData() : windowWidth
        );
        setSidebarWidth(() => {
          return sidebarWidth + deltaX < windowWidth / 2
            ? initialData()
            : windowWidth;
        });
        console.log("up end:", sidebarWidth, deltaX);
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
    []
  );

  return (
    <S.Sidebar ref={sidebarRef} onMouseDown={mouseDownHandler}>
      <S.Wrapper
        style={{
          maxWidth: `${windowWidth}px`,
          width: `${sidebarWidth}px`,
        }}
      >
        <S.Sticky>
          <SidebarProfile />
          <SidebarItem />
          {/* <SidebarAlert /> */}
          <SidebarSocial />
        </S.Sticky>
      </S.Wrapper>
    </S.Sidebar>
  );
}
