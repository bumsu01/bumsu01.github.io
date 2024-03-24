import { SidebarListData } from '../../../constants/data/SidebarData';
import * as S from './SidebarItem.styled';

export default function SidebarItem() {
  return (
    <S.SidebarListItem className="sidebar-nav heading" role="navigation">
      <ul className="space-y-2 font-medium">
        {SidebarListData.map((item) => {
          return (
            <li key={item.text}>
              <S.SidebarListItemWrapper>
                <a href={item.link} className="flex items-center p-2">
                  <span className="ms-3">{item.text}</span>
                </a>
              </S.SidebarListItemWrapper>
            </li>
          );
        })}
      </ul>
    </S.SidebarListItem>
  );
}
