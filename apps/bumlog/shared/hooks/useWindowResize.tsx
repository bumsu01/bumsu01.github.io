import { useEffect, useState } from 'react';

const useWindowResize = () => {
  type WindowSizeType = {
    width?: number;
    height?: number;
    initSidebar: number;
  };
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: undefined,
    height: undefined,
    initSidebar: 344,
  });

  const getInitSidebarWidth = () => {
    if (window.innerWidth < 1024) {
      return 8;
    }
    if (window.innerWidth < 1512) {
      return 344;
    }
    return 500;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          initSidebar: getInitSidebarWidth(),
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
    return () =>
      window.removeEventListener('resize', () => {
        return null;
      });
  }, []);
  return windowSize;
};

export default useWindowResize;
