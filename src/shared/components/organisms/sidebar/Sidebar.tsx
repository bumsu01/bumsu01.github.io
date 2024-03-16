/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Sidebar.styled";
import { SidebarItem } from "../sidebar-item";
import { SidebarProfile } from "../sidebar-profile";
import SidebarSocial from "../sidebar-social/SidebarSocial";
import SidebarAlert from "../sidebar-alert/SidebarAlert";
import useWindowResize from "shared/hooks/useWindowResize";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [sidebarWidth, setSidebarWidth] = useState<number>(() => initialData());

  const resizeWidth = useWindowResize();
  function initialData(): number {
    if (windowWidth < 1024) {
      return 8;
    } else if (windowWidth < 1512) {
      return 344;
    } else {
      return 500;
    }
  }

  useEffect(() => {
    if (resizeWidth.width === undefined) {
      return;
    }
    setWindowWidth(resizeWidth.width);
    setSidebarWidth(() => initialData());
  }, [resizeWidth]);

  const mouseDownHandler = useCallback(
    (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        setSidebarWidth(() => {
          return sidebarWidth + deltaX;
        });
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        setSidebarWidth(() => {
          return sidebarWidth + deltaX < windowWidth / 2
            ? initialData()
            : windowWidth;
        });
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
    [sidebarWidth]
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
