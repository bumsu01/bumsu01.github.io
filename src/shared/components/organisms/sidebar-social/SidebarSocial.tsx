import * as S from "./SidebarSocial.styled";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsStackOverflow } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SidebarSocial() {
  return (
    <S.SidebarSocial>
      <span className="sr-only">Social:</span>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com"
            title="LinkedIn"
            className="no-mark-external"
          >
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bumsu01"
            title="GitHub"
            className="no-mark-external"
          >
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="http://stackoverflow.com/"
            title="Stack Overflow"
            className="no-mark-external"
          >
            <BsStackOverflow />
            <span className="sr-only">Stack Overflow</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:bumsu01@gmail.com"
            title="Email"
            className="no-mark-external"
          >
            <MdEmail />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </S.SidebarSocial>
  );
}
