import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '범수의 깃블로그',
  description: 'Bumsu(Glenn)의 포트폴리오입니다.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_DOMAIN as string),
  openGraph: {
    title: '범수의 블로그',
    description: 'Bumsu(Glenn)의 포트폴리오입니다. 다양한 프로젝트와 기술 TIL을 구경하세요.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '깃블로그',
    url: process.env.NEXT_PUBLIC_WEB_DOMAIN,
    images: [
      {
        url: `https://${
          process.env.NEXT_PUBLIC_WEB_DOMAIN as string
        }/assets/images/og/og_image.webp`,
        width: 1200,
        height: 630,
        alt: '범수의 깃블로그',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: process.env.EXECUTION_ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
  themeColor: '#7344e5',
};
