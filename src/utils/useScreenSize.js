import { useState, useEffect } from 'react';

const useScreenSize = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {

      const width = window.innerWidth

      if (width <= 480) {
        setIsMobile(true)
        setIsDesktop(false)
      }
      else {
        setIsMobile(false)
        setIsDesktop(true)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [isMobile, isDesktop];
};

export default useScreenSize;