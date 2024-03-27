import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 100vh;
  align-items: stretch;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Frame = styled.div`
  flex-shrink: 0;
`;

export const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

export const FixedWidth = styled.div`
  width: 100%;
`;
