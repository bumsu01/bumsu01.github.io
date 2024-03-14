import styled from "@emotion/styled";

export const Sidebar = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: calc(50% - 50vw);
  max-width: 100vw;
  width: ${({ width }) => width}px;
  height: 100%;
  transform: translateX(${({ width }) => width}px) all 1s;

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
    animation-iteration-count: 1;
    animation-name: fadeIn;
    position: fixed;
    z-index: 3;
    opacity: 1;
    padding-top: 5%;
    contain: content;
    padding: 1.5rem;
    text-align: center;
    width: ${({ width }) => width}px;
  }

  & a {
    touch-action: manipulation;
    text-decoration-style: solid;
    transition: color 250ms, text-decoration-color 250ms, border-color 250ms;
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    text-decoration-color: rgba(255, 255, 255, 0.2);
    text-shadow: rgba(0, 0, 0, 0.25) 0.1rem 0.1rem 0.15rem;
  }
`;

export const Wrapper = styled.div<{ width: number }>`
  max-width: 100%;
  background: center / cover url(/assets/images/photo/sidebar.jpeg);
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  :active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

export const Sticky = styled.div`
  text-align: center;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: fadeIn;
  height: 100%;
  padding-top: 5%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
  max-width: 21rem;
  padding: 1.5rem;
  contain: content;
`;
