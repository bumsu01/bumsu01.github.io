import styled from '@emotion/styled';

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 50vw);
  height: 100%;

  & a {
    touch-action: manipulation;
    text-decoration-style: solid;
    transition:
      color 250ms,
      text-decoration-color 250ms,
      border-color 250ms;
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    text-decoration-color: rgba(255, 255, 255, 0.2);
    text-shadow: rgba(0, 0, 0, 0.25) 0.1rem 0.1rem 0.15rem;
  }
`;

export const Wrapper = styled.div`
  background: center / cover url(/assets/images/photo/sidebar.jpeg);
  text-align: center;
  position: fixed;
  top: 0px;
  height: 100vh;
  padding-top: 5%;
  padding: 0.5rem;
  contain: content;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  animation-iteration-count: 1;
  animation-name: fadeIn;
  opacity: 1;
  z-index: 3;

  :active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

export const Sticky = styled.div`
  position: fixed;
  left: 50%;
  height: 100%;
  contain: content;
  text-align: center;
  z-index: 3;
  padding-top: 5%;
  padding: 0.5rem;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: fadeIn;
  transform: translate(-50%, 0);
`;
