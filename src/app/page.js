'use client';

import { useRouter } from 'next/navigation';
import AnimatedButton from '@/components/buttons/AnimatedButton';
import MissionStatements from '@/components/MissionStatements';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className='home-page'>
      {/* Hero Section */}
      <section className='hero bg-cover bg-center text-white p-2 sm:p-8 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl xs:text-3xl text-xl font-semibold mb-4 text-shadow-md'>
            Building & Remodeling Specialists
          </h1>
          <p className='text-lg mb-6 text-shadow-md'>
            Expert construction services tailored to your needs.
          </p>
          <AnimatedButton
            text='Get in Touch'
            onClick={() => router.push('/contact')}
          />
        </div>
      </section>

      <MissionStatements />
    </div>
  );
};

export default HomePage;
