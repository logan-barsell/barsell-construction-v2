import { useEffect } from 'react';
import gsap from 'gsap';

const useScrollAnimation = (
  elementsRef,
  options = { duration: 0.8, delay: 0.1 }
) => {
  useEffect(() => {
    if (!elementsRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting && el.dataset.animated !== 'true') {
            el.dataset.animated = 'true';

            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: options.duration,
              ease: 'power3.out',
              delay: parseFloat(el.dataset.index) * options.delay,
            });

            observer.unobserve(el); // Stop watching this element
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [elementsRef, options]);

  return (el, index) => {
    if (!elementsRef.current) elementsRef.current = [];
    if (el) {
      el.dataset.index = index;
      elementsRef.current[index] = el;
    }
  };
};

export default useScrollAnimation;
