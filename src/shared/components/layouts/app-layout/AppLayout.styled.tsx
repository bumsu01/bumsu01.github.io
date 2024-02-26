import styled from "@emotion/styled";

export const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

export const FixedWidth = styled.div`
  width: 500px;
  @media (max-width: 500px) {
    /* 화면 너비가 500px 이하가 되면 요소 너비를 100%로 고정*/
    width: 100%;
  }
`;
