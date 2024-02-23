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
        <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.9" />
        <path
          d="M23.9783 13.3359C18.0983 13.3359 13.3359 17.4345 13.3359 22.4262C13.3359 25.684 15.3283 28.5215 18.2927 30.1504L17.2722 34.1964C17.2236 34.3015 17.2722 34.4591 17.3693 34.5642C17.4179 34.6167 17.5151 34.6693 17.5637 34.6693C17.6123 34.6693 17.7095 34.6167 17.7581 34.6167L22.0831 31.464C22.7148 31.5691 23.3466 31.6217 24.0269 31.6217C29.9069 31.6217 34.6693 27.5231 34.6693 22.5313C34.6693 17.4345 29.9069 13.3359 23.9783 13.3359Z"
          fill="#18171C"
        />
      </svg>
    </motion.div>
  );
}
