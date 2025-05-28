import { useEffect, useRef } from 'react';

const ClickOutside = ({ children, onClickOutside }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside(); // Trigger the callback if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};

export default ClickOutside;
