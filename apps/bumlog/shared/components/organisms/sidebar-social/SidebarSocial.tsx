import { BsStackOverflow } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import * as S from './SidebarSocial.styled';

export default function SidebarSocial() {
  return (
    <S.SidebarSocial>
      <S.SrOnly>Social:</S.SrOnly>
      <ul>
        <li>
          <a href="https://www.linkedin.com" title="LinkedIn" className="no-mark-external">
            <FaLinkedin size="32" color="#fff" />
            <S.SrOnly>LinkedIn</S.SrOnly>
          </a>
        </li>
        <li>
          <a href="https://github.com/bumsu01" title="GitHub" className="no-mark-external">
            <FaGithub size="32" color="#fff" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a href="http://stackoverflow.com/" title="Stack Overflow" className="no-mark-external">
            <BsStackOverflow size="32" color="#fff" />
            <span className="sr-only">Stack Overflow</span>
          </a>
        </li>
        <li>
          <a href="mailto:bumsu01@gmail.com" title="Email" className="no-mark-external">
            <MdEmail size="32" color="#fff" />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </S.SidebarSocial>
  );
}
