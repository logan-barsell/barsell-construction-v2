'use client';
import { useRef } from 'react';
import AnimatedButton from '@/components/buttons/AnimatedButton';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation'; // Import the scroll animation hook
import { useRouter } from 'next/navigation';

const ServicesPage = () => {
  const router = useRouter();
  // Create a ref array to store all the service elements
  const elementsRef = useRef([]);

  // Using the custom scroll animation hook
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
                index % 2 === 0
                  ? 'bg-heroWhite' // Keep the bg-nav for the default background
                  : ' text-white text-shadow-md' // bg-primary for alternate sections
              } py-16`}
              ref={el => assignRef(el, index)} // Assigning the ref for scroll animation
            >
              <div
                className={`container mx-auto ${
                  index % 2 === 0 ? 'lg:text-left' : 'lg:text-right' // Alternate alignment
                }`}
              >
                {/* Image visible only on large screens */}
                <div className=' mb-6'>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`m-auto lg:m-0 max-w-sm sm:max-w-xs w-full h-auto object-cover ${
                      index % 2 === 0
                        ? `lg:justify-self-start`
                        : `lg:justify-self-end`
                    }`} // Adjust the size and fit of the image
                  />
                </div>

                {/* Service title and description */}
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
