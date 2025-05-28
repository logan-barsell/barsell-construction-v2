'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const pathname = usePathname(); // Using usePathname to listen for path changes

  useEffect(() => {
    // Trigger animation on route change
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'ease-out' }
    );
  }, [pathname]); // Dependency on pathname to trigger on route change

  return <div ref={pageRef}>{children}</div>;
};

export default PageTransition;
