const Zoom = require("react-reveal/Zoom");

import { AboutData } from "../../shared/constants/data/AboutData";
import { LinksData } from "../../shared/constants/data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../../public/assets/images/photo/profile.webp";
import Image from "next/image";

const welcomeText = `I Am, ${AboutData.firstName}  ${AboutData.lastName}`;

export default function Home() {
  return (
    <div className={styles.home}>
      <Zoom cascade>
        <Image src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
      </Zoom>
      <Zoom cascade>
        <h3 className={styles.about}>{AboutData.about1}</h3>
        <h3 className={styles.about_next}>{AboutData.about2}</h3>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Zoom>
    </div>
  );
}
