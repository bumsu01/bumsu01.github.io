import { motion, Variants } from "framer-motion";

interface IconProps {
  variantsMotion: Variants;
}

export default function KakaoShare({ variantsMotion }: IconProps) {
  return (
    <motion.div
      initial="offscreen"
      whileTap="onscreen"
      whileHover="onscreen"
      variants={variantsMotion}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="#FAE100" />
        <path
          d="M23.9754 13.333C18.0953 13.333 13.333 17.4315 13.333 22.4233C13.333 25.6811 15.3254 28.5186 18.2897 30.1475L17.2692 34.1934C17.2206 34.2985 17.2692 34.4562 17.3664 34.5613C17.415 34.6138 17.5122 34.6663 17.5608 34.6663C17.6094 34.6663 17.7066 34.6138 17.7552 34.6138L22.0802 31.4611C22.7119 31.5662 23.3436 31.6187 24.024 31.6187C29.904 31.6187 34.6663 27.5202 34.6663 22.5284C34.6663 17.4315 29.904 13.333 23.9754 13.333Z"
          fill="#3B1E1E"
        />
      </svg>
    </motion.div>
  );
}
