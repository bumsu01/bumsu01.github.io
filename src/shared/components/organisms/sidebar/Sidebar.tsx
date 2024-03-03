import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./Sidebar.styled";
import { SidebarItem } from "../sidebar-item";

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
          <SidebarItem itemText="home" link="/" />
          <SidebarItem itemText="home" link="/" />
          <SidebarItem itemText="home" link="/" />
          <SidebarItem itemText="contact" link="/contact" />
        </ul>
        <div
          id="dropdown-cta"
          className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
              Setting
            </span>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
              data-dismiss-target="#dropdown-cta"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              ></svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Setting Blog Cookie, Theme
          </p>
          <a
            className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
          >
            Turn off Theme Sight
          </a>
        </div>
      </S.Wrapper>
    </S.Sidebar>
  );
}
