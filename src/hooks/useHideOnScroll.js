import { useState, useEffect, useRef } from 'react';

const useHideOnScroll = (threshold = 20) => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY <= 0;
      const isAtBottom =
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 1;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentScrollY - lastScrollY.current;

          if (isAtTop) {
            setShowNav(true);
            lastScrollY.current = 0;
          } else if (isAtBottom) {
            // Do nothing — don’t show nav on bottom bounce
            lastScrollY.current = currentScrollY;
          } else if (Math.abs(delta) > threshold) {
            setShowNav(delta < 0); // Show nav if scrolling up
            lastScrollY.current = currentScrollY;
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return showNav;
};

export default useHideOnScroll;
