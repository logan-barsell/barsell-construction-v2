import { useState, useEffect } from 'react';

const useHideOnScroll = () => {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return showNav;
};

export default useHideOnScroll;
