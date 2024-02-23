import { motion, Variants } from "framer-motion";

interface IconProps {
  variantsMotion: Variants;
}

export default function LinkShare({ variantsMotion }: IconProps) {
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
        <rect width="48" height="48" rx="24" fill="#61676E" />
        <ellipse
          cx="29.5562"
          cy="17.3335"
          rx="2.22222"
          ry="2.22222"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="29.5562"
          cy="30.6666"
          r="2.22222"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="18.4449"
          cy="24.0005"
          r="2.22222"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20.1369 22.4687L27.8349 18.0242"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M27.8348 29.9228L20.1368 25.4783"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
