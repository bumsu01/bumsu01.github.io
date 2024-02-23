interface CustomerCenterOffProps {
  isMain?: boolean;
}

export default function CustomerCenterOff({
  isMain = false,
}: CustomerCenterOffProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="iconCustomerCenter"
    >
      <title id="iconCustomerCenter">채팅상담</title>
      <rect
        x="6"
        y="15.9998"
        width="6"
        height="10"
        rx="3"
        stroke={isMain ? "#FFFFFF" : "#0A0B0C"}
        strokeWidth="2"
      />
      <rect
        x="20"
        y="15.9998"
        width="6"
        height="10"
        rx="3"
        stroke={isMain ? "#FFFFFF" : "#0A0B0C"}
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 15.9998V18.9998H27V15.9998C27 9.92472 22.0751 4.99985 16 4.99985C9.92487 4.99985 5 9.92472 5 15.9998V18.9998H7V15.9998C7 11.0293 11.0294 6.99985 16 6.99985C20.9706 6.99985 25 11.0293 25 15.9998Z"
        fill={isMain ? "#FFFFFF" : "#0A0B0C"}
      />
    </svg>
  );
}
