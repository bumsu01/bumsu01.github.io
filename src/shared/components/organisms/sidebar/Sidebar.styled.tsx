import styled from "@emotion/styled";

export const Sidebar = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: calc(50% - 50vw);
  width: 100vw;
  height: 100%;
  text-align: center;
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
    width: ${({ width }) => width}px;
  }
`;

export const Wrapper = styled.div<{ width: number }>`
  max-width: 100%;
  background: center / cover url(/assets/images/photo/sidebar.jpeg);
`;
