import { useEffect, useState } from "react";

const useWindowResize = () => {
  type windowSizeType = {
    width?: number;
    height?: number;
    initSidebar: number;
  };
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    width: undefined,
    height: undefined,
    initSidebar: 344,
  });

  const getInitSidebarWidth = () => {
    if (window.innerWidth < 1024) {
      return 8;
    } else if (window.innerWidth < 1512) {
      return 344;
    } else {
      return 500;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          initSidebar: getInitSidebarWidth(),
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);
  return windowSize;
};

export default useWindowResize;
