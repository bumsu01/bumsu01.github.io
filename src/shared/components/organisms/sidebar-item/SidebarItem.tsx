interface SidebarItemProp {
  itemText: string;
  icon?: React.ReactElement;
  link: string;
}

export default function SidebarItem({ itemText, icon, link }: SidebarItemProp) {
  return (
    <li>
      <a
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="ms-3">{itemText}</span>
      </a>
    </li>
  );
}
