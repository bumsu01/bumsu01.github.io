import styled from "@emotion/styled";

export const SidebarSocial = styled.div`
  display: block;
  box-sizing: border-box;
  text-align: center;

  & ul {
    margin-top: 0;
    display: inline-block;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  & li {
    padding: 0.6em 0em 0.6em 0em;
    float: left;
    display: list-item;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
  }

  & a {
    color: -webkit-link;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    font-size: 1.4rem;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem 0.5rem;
    line-height: 3rem;
    text-decoration: none;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    text-shadow: rgba(0, 0, 0, 0.25) 0.1rem 0.1rem 0.15rem;
  }

  a:hover {
    border-bottom-color: rgba(255, 255, 255, 1);
  }
`;

export const SrOnly = styled.div`
  display: unset;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
