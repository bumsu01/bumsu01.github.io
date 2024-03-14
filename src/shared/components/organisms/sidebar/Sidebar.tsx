import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Sidebar.styled";
import { SidebarItem } from "../sidebar-item";
import { SidebarProfile } from "../sidebar-profile";
import SidebarSocial from "../sidebar-social/SidebarSocial";
import SidebarAlert from "../sidebar-alert/SidebarAlert";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);
  const [mouseDownX, setMouseDownX] = useState<number>(0);
  const [mouseDownWidth, setMouseDownWidth] = useState<number>(0);

  if (!!window && sidebarRef.current) {
    console.log("window Width", window?.innerWidth);
    console.log("window Width", window?.outerWidth);
    console.log("ref client Width", sidebarRef.current?.clientWidth);
    console.log("ref offset Width", sidebarRef.current?.offsetWidth);
    console.log("ref scroll Width", sidebarRef.current?.scrollWidth);
  }

  const startResizing = useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLDivElement>) => {
      setMouseDownWidth(sidebarWidth || 268);
      setMouseDownX(mouseDownEvent.clientX);
      setIsResizing(true);
    },
    [sidebarWidth]
  );

  const stopResizing = useCallback((mouseMoveEvent: MouseEvent) => {
    setIsResizing(false);
    console.log("Resizing");
    if (!!sidebarRef.current) {
      setSidebarWidth(
        mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left <
          window.innerWidth / 2
          ? sidebarRef.current.getBoundingClientRect().left
          : window.innerWidth
      );
    }
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      // console.log("resize start", isResizing);
      // console.log("mouseDownX: ", mouseDownX);
      // console.log("mouseDownWidth: ", mouseDownWidth);
      if (isResizing && !!sidebarRef.current) {
        setSidebarWidth(
          mouseDownX - mouseMoveEvent.clientX < 0
            ? mouseDownWidth + Math.abs(mouseDownX - mouseMoveEvent.clientX)
            : mouseDownWidth - Math.abs(mouseDownX - mouseMoveEvent.clientX)
        );
      }
    },
    [isResizing, mouseDownWidth, mouseDownX]
  );

  useEffect(() => {
    if (!!sidebarRef.current) {
      sidebarRef.current.addEventListener("mousemove", resize);
      sidebarRef.current.addEventListener("mouseup", stopResizing);
    }
    return () => {
      if (!!sidebarRef.current) {
        sidebarRef.current.removeEventListener("mousemove", resize);
        sidebarRef.current.removeEventListener("mouseup", stopResizing);
      }
    };
  }, [resize, stopResizing]);

  return (
    <S.Sidebar ref={sidebarRef} width={sidebarWidth}>
      <S.Wrapper
        className={`peek full-height text-balance`}
        width={sidebarWidth}
        style={{ transition: `${isResizing ? "" : "width 0.5s"}` }}
        onMouseDown={startResizing}
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
