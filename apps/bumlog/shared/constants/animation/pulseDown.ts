import { Variants } from "framer-motion";

const pulseDown: Variants = {
  offscreen: {
    y: 0,
  },
  onscreen: {
    y: [-5, 1, -5],
    transition: {
      duration: 2,
      delay: 1,
      repeat: Infinity,
    },
  },
};

export default pulseDown;
