'use client';
import { useRef } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/testimonials';

const TestimonialsPage = () => {
  const elementsRef = useRef([]);
  const assignRef = useScrollAnimation(elementsRef, {
    duration: 0.8,
    delay: 0.1,
  });

  return (
    testimonials.length > 0 && (
      <div className='testimonials-page'>
        <section className='hero bg-cover bg-center text-white p-2 sm:p-8 '>
          <div className='container mx-auto text-center flex flex-col items-center py-32'>
            <h1 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4 text-shadow-md'>
              Testimonials
            </h1>
            <p className='text-lg mb-6 text-shadow-md'>
              Hear what our clients have to say about working with Barsell
              Construction Inc.
            </p>
          </div>
        </section>

        <section className='pb-16'>
          <div className='mx-auto text-center flex flex-col items-center'>
            {testimonials.map((t, index) => (
              <div
                key={index}
                ref={el => assignRef(el, index)}
                className={`hero-section px-6 w-full ${
                  index % 2 === 0 ? 'bg-heroWhite' : 'text-white text-shadow-md'
                } py-16`}
              >
                <div
                  className={`container mx-auto max-w-3xl ${
                    index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}
                >
                  <p className='text-xl italic mb-6'>&ldquo;{t.quote}&rdquo;</p>
                  <p className='font-semibold'>
                    — {t.name}{' '}
                    <span className='text-sm font-normal'>({t.date})</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  );
};

export default TestimonialsPage;
