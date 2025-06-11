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
      {gallery.map((image, index) => {
        const isPriority = index === 0 || index === 1;

        return (
          <div
            key={index}
            ref={index > 1 ? el => registerImageRef(el, index) : null}
            className={`relative overflow-hidden ${
              isPriority ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt || `Gallery Image ${index + 1}`}
              width={800}
              height={600}
              className='w-full h-auto shadow-lg'
              sizes={isPriority ? '800px' : '(max-width: 640px) 100vw, 50vw'}
              loading={isPriority ? 'eager' : 'lazy'}
              priority={isPriority}
              fetchPriority={isPriority ? 'high' : 'auto'}
              placeholder='empty'
              quality={90}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
