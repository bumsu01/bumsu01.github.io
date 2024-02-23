interface AlertIconProps {
  width?: number;
  height?: number;
  color?: string;
}
export function AlertIcon({
  width = 24,
  height = 24,
  color = "#3C444B",
}: AlertIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.85 12.6743C12.8367 13.1341 12.4601 13.5 12 13.5C11.5399 13.5 11.1633 13.1341 11.15 12.6743L11.029 8.49958C11.0131 7.95228 11.4525 7.5 12 7.5C12.5475 7.5 12.9869 7.95228 12.971 8.49958L12.85 12.6743ZM13 15.4979C12.9958 16.0518 12.5327 16.5 11.998 16.5C11.4464 16.5 10.9917 16.0518 11.0001 15.4979C10.9917 14.9482 11.4464 14.5 11.998 14.5C12.5327 14.5 12.9958 14.9482 13 15.4979Z"
        fill={color}
      />
    </svg>
  );
}

export function ToastAlertIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8" stroke={"#CED4D9"} strokeWidth="1.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5L13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5L11 11.5ZM11 8.50211C11.0042 7.9482 11.4673 7.5 12.002 7.5C12.5536 7.5 13.0083 7.9482 12.9999 8.50211C13.0083 9.0518 12.5536 9.5 12.002 9.5C11.4673 9.5 11.0042 9.0518 11 8.50211Z"
        fill={"#CED4D9"}
      />
    </svg>
  );
}
