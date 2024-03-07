import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Sidebar.styled";
import { SidebarItem } from "../sidebar-item";
import SidebarSocial from "../sidebar-social/SidebarSocial";
import { SidebarListData } from "@/data/SidebarData";
import SidebarAlert from "../sidebar-alert/SidebarAlert";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLDivElement>) => {
      setIsResizing(true);
    },
    []
  );

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && !!sidebarRef.current) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <S.Sidebar ref={sidebarRef} onMouseDown={(e) => e.preventDefault()}>
      <S.Wrapper
        className="peek full-height h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
        onMouseDown={startResizing}
        style={{ width: sidebarWidth }}
      >
        <ul className="space-y-2 font-medium">
          {SidebarListData.map((item) => {
            return (
              <SidebarItem
                key={item.text}
                itemText={item.text}
                link={item.link}
              />
            );
          })}
        </ul>
        <SidebarAlert />
        <SidebarSocial />
      </S.Wrapper>
    </S.Sidebar>
  );
}
