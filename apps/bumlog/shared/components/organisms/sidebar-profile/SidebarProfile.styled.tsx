import styled from '@emotion/styled';

export const SidebarProfile = styled.div`
  box-sizing: border-box;
  display: block;
  border-bottom: none;
  text-decoration-thickness: unset;
  text-underline-offset: unset;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.75);

  & p {
    display: block;
    font-size: 1rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-shadow: rgba(0, 0, 0, 0.25) 0.1rem 0.1rem 0.15rem;
  }
`;

export const SidebarProfileAvatar = styled.div`
  pointer-events: none;
  display: contents;
  width: 100%;
`;

export const SidebarProfileTitle = styled.div`
  font-size: 2rem;
  line-height: 1.3;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.25) 0.1rem 0.1rem 0.15rem;
  margin: 0;
  padding-bottom: 0.5rem;
  touch-action: manipulation;
  text-align: -webkit-match-parent;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-underline-offset: 8px;
  border-bottom-color: rgb(255, 255, 255, 0.2);
  transition:
    color 250ms,
    text-decoration-color 250ms,
    border-color 250ms;

  &:hover {
    text-decoration-color: white;
  }
`;
