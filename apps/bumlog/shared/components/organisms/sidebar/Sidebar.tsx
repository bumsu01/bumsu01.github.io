/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useCallback, useRef, useState } from 'react';

import SidebarAlert from '../sidebar-alert/SidebarAlert';
import { SidebarItem } from '../sidebar-item';
import { SidebarProfile } from '../sidebar-profile';
import SidebarSocial from '../sidebar-social/SidebarSocial';

import * as S from './Sidebar.styled';

export default function Sidebar({
  windowWidth = 1024,
  initSidebarWidth,
}: {
  windowWidth?: number;
  initSidebarWidth: number;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = useState<number>(initSidebarWidth);

  useEffect(() => {
    if (sidebarWidth === 8 || sidebarWidth === 344 || sidebarWidth === 500) {
      setSidebarWidth(initSidebarWidth);
    } else {
      setSidebarWidth(windowWidth);
    }
  }, [initSidebarWidth, windowWidth]);

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
          return sidebarWidth + deltaX < windowWidth / 2 ? initSidebarWidth : window.innerWidth;
        });
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
    [sidebarWidth],
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
