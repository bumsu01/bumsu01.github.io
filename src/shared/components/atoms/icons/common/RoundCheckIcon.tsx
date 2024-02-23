interface IconProps {
  outsideColor?: string;
  insideColor?: string;
}

export default function RoundCheckIcon({
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
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="8"
        stroke={outsideColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 9L10.8333 15.1818L8 12.0909"
        stroke={insideColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
