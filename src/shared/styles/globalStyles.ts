import { css } from "@emotion/react";

const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
  }
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  img {
    pointer-events: none;
  }
  button {
    cursor: pointer;
  }
  a:hover {
    opacity: 0.6;
  }
`;

export default globalStyles;
