import { useEffect, useRef } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Gallery = ({ gallery }) => {
  const imageRefs = useRef([]);
  const registerImageRef = useScrollAnimation(imageRefs, {
    duration: 0.6,
    delay: 0.025,
  });

  return (
    <div
      key={gallery.length + gallery[0]} // Force rerender if tab changes
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'
    >
      {gallery.map((image, index) => (
        <div
          key={index}
          ref={el => registerImageRef(el, index)}
          className='relative overflow-hidden rounded-lg opacity-0'
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className='object-cover w-full h-full'
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
