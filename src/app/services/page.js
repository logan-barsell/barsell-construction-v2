'use client';
import { useRef } from 'react';
import Image from 'next/image';
import AnimatedButton from '@/components/buttons/AnimatedButton';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { useRouter } from 'next/navigation';

const ServicesPage = () => {
  const router = useRouter();
  const elementsRef = useRef([]);
  const assignRef = useScrollAnimation(elementsRef, {
    duration: 0.8,
    delay: 0.1,
  });

  return (
    <div className='services-page'>
      <section className='hero bg-cover bg-center text-white p-2 sm:p-8 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4 text-shadow-md'>
            Our Services
          </h1>
        </div>
      </section>

      <section className='services py-16'>
        <div className='mx-auto text-center flex flex-col items-center'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`hero-section px-6 w-full ${
                index % 2 === 0 ? 'bg-heroWhite' : 'text-white text-shadow-md'
              } py-16`}
              ref={el => assignRef(el, index)}
            >
              <div
                className={`container mx-auto ${
                  index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                }`}
              >
                <div
                  className={`mb-6 flex justify-center ${
                    index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  <div className='relative max-w-sm sm:max-w-xs w-full h-auto aspect-[4/3]'>
                    <Image
                      src={service.image}
                      alt={`${service.name} Service Hero Image`}
                      fill
                      sizes='(max-width: 768px) 100vw, 400px'
                      className='object-cover'
                      loading='lazy'
                      placeholder='empty'
                    />
                  </div>
                </div>

                <h3 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-8'>
                  {service.name}
                </h3>
                <p className='text-xl text-light mb-8 mx-auto'>
                  {service.description}
                </p>
                <div
                  className={`flex ${
                    index % 2 === 0
                      ? 'justify-center lg:justify-start'
                      : 'justify-center lg:justify-end'
                  }`}
                >
                  <AnimatedButton
                    text='Learn More'
                    color={index % 2 === 0 ? 'black' : 'white'}
                    onClick={() => router.push('/contact')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
