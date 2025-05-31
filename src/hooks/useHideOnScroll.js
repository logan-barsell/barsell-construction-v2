import { useState, useEffect, useRef } from 'react';

const useHideOnScroll = (threshold = 20) => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const cooldown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY <= 0;
      const BOTTOM_BUFFER = 30;
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.body.offsetHeight - BOTTOM_BUFFER;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentScrollY - lastScrollY.current;

          if (Math.abs(delta) < 2) {
            ticking.current = false; // ✅ reset on early return
            return;
          }

          if (isAtTop) {
            setShowNav(true);
            lastScrollY.current = 0;
          } else if (isAtBottom) {
            cooldown.current = true;
            setTimeout(() => (cooldown.current = false), 400);
            lastScrollY.current = currentScrollY;
          } else if (!cooldown.current && Math.abs(delta) > threshold) {
            setShowNav(delta < 0);
            lastScrollY.current = currentScrollY;
          }

          ticking.current = false;
        });

        ticking.current = true;

        // Fail-safe fallback
        setTimeout(() => {
          ticking.current = false;
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return showNav;
};

export default useHideOnScroll;
