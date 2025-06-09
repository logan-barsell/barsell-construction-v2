'use client';
import { useRef } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Image from 'next/image';

const Gallery = ({ gallery }) => {
  const imageRefs = useRef([]);
  const registerImageRef = useScrollAnimation(imageRefs, {
    duration: 0.6,
    delay: 0.025,
  });

  return (
    <div
      key={gallery.length + gallery[0]}
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'
    >
      {gallery.map((image, index) => (
        <div
          key={index}
          ref={el => registerImageRef(el, index)}
          className='relative overflow-hidden opacity-0'
        >
          <Image
            src={image.src}
            alt={image.alt || `Gallery Image ${index + 1}`}
            width={800}
            height={600}
            className='object-cover w-full h-full shadow-lg'
            sizes='(max-width: 640px) 100vw, 50vw'
            loading='lazy'
            placeholder='empty'
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
