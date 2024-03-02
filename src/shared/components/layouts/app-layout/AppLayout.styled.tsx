import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 1em 1em;
  flex-direction: row;
  height: 100vh;
`;

export const Frame = styled.div`
    flex: 1;
    width: 50%;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    background: white;
    height: 100vh;
    max-height: 100%;
    background: #ffffff;
    box-shadow: 8px 2px 32px -2px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 0px;
    z-index: 1;
  }
`;
