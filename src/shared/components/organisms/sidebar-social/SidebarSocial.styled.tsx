import styled from "@emotion/styled";

export const SidebarSocial = styled.div`
  display: block;

  & ul {
    margin-top: 0;
    display: inline-block;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  & li {
    float: left;
    display: list-item;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
  }

  & a {
    display: inline-block;
    text-align: center;
    font-size: 1.4rem;
    width: 3rem;
    height: 4rem;
    padding: 0.5rem 0;
    line-height: 3rem;
    text-decoration: none;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  [class^="icon-"],
  [class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
