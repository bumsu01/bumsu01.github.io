import { SidebarProfileData } from "@/data/SidebarData";
import * as S from "./SidebarProfile.styled";
import { CloudFrontImage } from "@/atoms/images";

export default function SidebarProfile() {
  return (
    <S.SidebarProfile className="p-6 font-bold">
      <S.SidebarProfileAvatar>
        <CloudFrontImage
          src={"/assets/images/character/cat.webp"}
          width={150}
          height={150}
          alt={"cat"}
        />
      </S.SidebarProfileAvatar>
      <S.SidebarProfileTitle className="underline-offset-8">
        <a href="/" title={SidebarProfile.name}>
          {SidebarProfileData.name}
        </a>
      </S.SidebarProfileTitle>
      <p>{SidebarProfileData.mentation}</p>
    </S.SidebarProfile>
  );
}
