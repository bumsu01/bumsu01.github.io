import { useRouter } from 'next/navigation';
import { Button } from '../../components/atoms/button';

import * as S from './ErrorLayout.styled';
import Image from 'next/image';
const TITLE = `페이지를
표시할 수 없습니다`;

export default function ErrorLayout() {
  const router = useRouter();

  const handleBottomButtonClick = () => {
    router.push(process.env.NEXT_PUBLIC_WEB_DOMAIN as string);
  };

  return (
    <S.ErrorLayout>
      <S.Container>
        <S.ErrorIconContainer>
          {/* <Image
        src="/assets/images/dialog/negative.webp"
        width={112}
        height={112}
        alt="Negative Image"
      /> */}
        </S.ErrorIconContainer>
        <S.TitleContainer>
          <S.Title>{TITLE}</S.Title>
        </S.TitleContainer>
      </S.Container>
      <S.BottomFixedButton>
        <Button onClick={handleBottomButtonClick}>홈으로 가기</Button>
      </S.BottomFixedButton>
    </S.ErrorLayout>
  );
}
