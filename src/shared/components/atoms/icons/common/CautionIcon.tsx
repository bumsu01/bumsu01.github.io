interface IconProps {
  outsideColor?: string;
  insideColor?: string;
}

export default function CautionIcon({
  outsideColor = "#3C444B",
  insideColor = "#3C444B",
}: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2679 5C11.0377 3.66667 12.9622 3.66667 13.7321 5L20.2679 16.3205C21.0377 17.6538 20.0755 19.3205 18.5359 19.3205H5.4641C3.9245 19.3205 2.96225 17.6538 3.73205 16.3205L10.2679 5Z"
        stroke={outsideColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.85 12.6743C12.8367 13.1341 12.4601 13.5 12 13.5C11.5399 13.5 11.1633 13.1341 11.15 12.6743L11.029 8.49958C11.0131 7.95228 11.4525 7.5 12 7.5C12.5475 7.5 12.9869 7.95228 12.971 8.49958L12.85 12.6743ZM13 15.4979C12.9958 16.0518 12.5327 16.5 11.998 16.5C11.4464 16.5 10.9917 16.0518 11.0001 15.4979C10.9917 14.9482 11.4464 14.5 11.998 14.5C12.5327 14.5 12.9958 14.9482 13 15.4979Z"
        fill={insideColor}
      />
    </svg>
  );
}
