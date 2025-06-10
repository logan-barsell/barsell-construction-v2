import { useEffect } from 'react';
import gsap from 'gsap';

const useScrollAnimation = (
  elementsRef,
  options = { duration: 0.8, delay: 0.1 }
) => {
  useEffect(() => {
    if (!elementsRef.current) return;

    let observer;

    const setupObserver = () => {
      observer = new IntersectionObserver(
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

              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      elementsRef.current.forEach(el => {
        if (el) observer.observe(el);
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(setupObserver, { timeout: 300 });
      } else {
        setTimeout(setupObserver, 300);
      }
    }

    return () => {
      if (observer) observer.disconnect();
    };
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
