'use client';

import { useRouter } from 'next/navigation';
import AnimatedButton from '@/components/buttons/AnimatedButton';
import MissionStatements from '@/components/MissionStatements';
import TestimonialsPage from '@/components/Testimonials';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className='home-page'>
      <section className='hero bg-cover bg-center text-white p-2 sm:p-8 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-24 sm:py-32'>
          <h1 className='sr-only'>Barsell Construction Inc.</h1>
          <h2 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4'>
            Building & Remodeling Specialists
          </h2>
          <p className='text-lg mb-6'>
            Expert construction services tailored to your needs.
          </p>
          <AnimatedButton
            text='Get in Touch'
            onClick={() => router.push('/contact')}
          />
        </div>
      </section>

      <MissionStatements />
      <TestimonialsPage />
    </div>
  );
};

export default HomePage;
