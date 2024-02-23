import styled from "@emotion/styled";

export const ErrorLayout = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  min-height: 100%;
  overflow: hidden !important;
  background-color: #ffffff;
  & *,
  & *::before,
  & *::after {
    box-sizing: border-box;
  }
`;

export const Navigation = styled.nav`
  position: fixed;
  width: inherit;
  max-width: inherit;
  top: 0;
  background-color: #ffffff;
  z-index: 50;
`;

export const BottomFixedButton = styled.div`
  box-sizing: border-box;
  width: inherit;
  max-width: inherit;
  position: fixed;
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

export const ErrorIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 40px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #000000;
  text-align: center;
  white-space: pre-line;
`;

export const NoticeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NoticeTitle = styled.span`
  color: #3c444b;
`;

export const NoticeDescription = styled.span`
  color: #61676e;
  white-space: pre-wrap;
`;

export const NoticeBoxContainer = styled.div`
  padding: 0 24px;
  position: absolute;
  width: calc(100%);
  bottom: 88px;
  margin-bottom: 24px;
`;
