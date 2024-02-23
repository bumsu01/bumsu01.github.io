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
        <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.9" />
        <ellipse
          cx="29.553"
          cy="17.3306"
          rx="2.22222"
          ry="2.22222"
          stroke="#18171C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="29.553"
          cy="30.6636"
          r="2.22222"
          stroke="#18171C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="18.4418"
          cy="23.9976"
          r="2.22222"
          stroke="#18171C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20.1343 22.4658L27.8323 18.0213"
          stroke="#18171C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M27.8323 29.9199L20.1343 25.4754"
          stroke="#18171C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
