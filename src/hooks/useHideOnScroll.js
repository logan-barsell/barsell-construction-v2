import { useState, useEffect, useRef } from 'react';

const useHideOnScroll = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentScrollY - lastScrollY.current;

          // Only update if scroll delta is significant
          if (Math.abs(delta) > 5) {
            if (currentScrollY <= 0) {
              // Always show nav at the very top
              setShowNav(true);
            } else if (delta > 0) {
              // Scrolling down
              setShowNav(false);
            } else {
              // Scrolling up
              setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showNav;
};

export default useHideOnScroll;
