import { ImGithub } from 'react-icons/im';
import { SiTistory, SiInstagram, SiNaver } from 'react-icons/si';

interface LinksType {
  title: string;
  icon: React.JSX.Element;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: 'GitHub',
    icon: <ImGithub color="#000000dc" />,
    link: 'https://github.com/bumsu01',
  },
  {
    title: 'LinkedIn',
    icon: <SiTistory color="#000000dc" />,
    link: 'https://bbmsk2.tistory.com/',
  },
  {
    title: 'Twitter',
    icon: <SiNaver color="#000000dc" />,
    link: 'https://blog.naver.com/bumsu01',
  },
  {
    title: 'Instagram',
    icon: <SiInstagram color="#000000dc" />,
    link: 'https://www.instagram.com/bbumskee',
  },
];
