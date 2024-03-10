import styled from "@emotion/styled";

export const SidebarListItem = styled.div`
  font-weight: var(--font-weight-heading);
  text-rendering: optimizeLegibility;
  font-family: var(--font-family-heading);
  display: block;
  box-sizing: border-box;

  & ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin-top: 0;
    margin-bottom: 1rem;
    list-style: none;
    padding-left: 0;
  }

  &li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
`;

export const SidebarListItemWrapper = styled.div`
  text-align: left;
  width: 18rem;
  display: flex;
  box-sizing: border-box;
  cursor: pointer;

  & a {
    touch-action: manipulation;
    text-decoration-style: solid;
    text-underline-offset: 0.35rem;
    text-decoration-thickness: 2px;
    font-size: 1.08rem;
    line-height: 1.6;
    display: inline-block;
    margin-bottom: 0.5rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0.1rem 0.1rem 0.1;
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    text-decoration-color: rgba(255, 255, 255, 0.2);
    transition: color 250ms, text-decoration-color 250ms, border-color 250ms;
  }
`;
