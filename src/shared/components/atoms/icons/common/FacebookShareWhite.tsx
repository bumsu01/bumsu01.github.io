import { motion, Variants } from "framer-motion";

interface IconProps {
  variantsMotion: Variants;
}

export default function FacebookShare({ variantsMotion }: IconProps) {
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
        <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.9" />
        <path
          d="M36 24C36 17.4 30.6 12 24 12C17.4 12 12 17.4 12 24C12 30 16.35 34.95 22.05 35.85V27.45H19.05V24H22.05V21.3C22.05 18.3 23.85 16.65 26.55 16.65C27.9 16.65 29.25 16.95 29.25 16.95V19.95H27.75C26.25 19.95 25.8 20.85 25.8 21.75V24H29.1L28.5 27.45H25.65V36C31.65 35.1 36 30 36 24Z"
          fill="#18171C"
        />
      </svg>
    </motion.div>
  );
}
