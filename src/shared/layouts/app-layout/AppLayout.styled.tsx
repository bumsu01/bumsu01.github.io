import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  width: 75%;
`;

export const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

export const FixedWidth = styled.div`
  width: 100%;
`;
