import styled from "@emotion/styled";

export const Sidebar = styled.div`
  position: static;
  flex-shrink: 0;
  display: flex;
  border-right: #e9e9e9 1px solid;
  flex-direction: row;
  background: #ffffff;
  box-shadow: -8px 2px 22px -7px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 0px 10px;
  z-index: 2;
  flex-grow: 1;
  cursor: grab;

  @media (min-width: 0em) {
    min-width: 0.5rem;
    .peek {
      width: 0.5rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    }
  }
  @media (min-width: 64em) {
    min-width: 21rem;
    .peek {
      min-width: 21rem;
      width: 21rem;
    }
  }
  @media (min-width: 1664px) {
    min-width: calc(50% - 31rem);
    .peek {
      min-width: calc(50% - 31rem);
      width: calc(50% - 31rem);
    }
  }

  .full-height {
    position: fixed;
    top: 0px;
    height: 100vh;
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

export const Wrapper = styled.div`
  transform: translate(0px, 0px);
`;
