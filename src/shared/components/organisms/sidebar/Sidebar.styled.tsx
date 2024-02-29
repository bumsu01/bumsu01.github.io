import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  padding: 1em 1em;
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Sidebar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 150px;
  max-width: 300px;
  display: flex;
  border-right: #e9e9e9 1px solid;
  flex-direction: row;
  background: #ffffff;
  box-shadow: -8px 2px 22px -7px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 0px 10px;
  z-index: 2;

  .app-sidebar-content {
    flex: 1;
  }

  .app-sidebar-resizer {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 6px;
    justify-self: flex-end;
    cursor: col-resize;
    resize: horizontal;
  }

  .app-sidebar-resizer:hover {
    width: 3px;
    background: #c1c3c5b4;
  }
`;

export const Frame = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    height: 100vh;
    max-height: 100%;
    background: #ffffff;
    box-shadow: 8px 2px 32px -2px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 0px;
    z-index: 1;
  }
`;
