import { motion, Variants } from "framer-motion";

interface IconProps {
  variantsMotion: Variants;
}
export default function TwitterShare({ variantsMotion }: IconProps) {
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
        <rect width="48" height="48" rx="24" fill="#1DA1F2" />
        <path
          d="M36 16.5C35.1 16.95 34.2 17.1 33.15 17.25C34.2 16.65 34.95 15.75 35.25 14.55C34.35 15.15 33.3 15.45 32.1 15.75C31.2 14.85 29.85 14.25 28.5 14.25C25.35 14.25 22.95 17.25 23.7 20.25C19.65 20.1 16.05 18.15 13.5 15.15C12.15 17.4 12.9 20.25 15 21.75C14.25 21.75 13.5 21.45 12.75 21.15C12.75 23.4 14.4 25.5 16.65 26.1C15.9 26.25 15.15 26.4 14.4 26.25C15 28.2 16.8 29.7 19.05 29.7C17.25 31.05 14.55 31.8 12 31.5C14.25 32.85 16.8 33.75 19.5 33.75C28.65 33.75 33.75 26.1 33.45 19.05C34.5 18.45 35.4 17.55 36 16.5Z"
          fill="white"
        />
      </svg>
    </motion.div>
  );
}
